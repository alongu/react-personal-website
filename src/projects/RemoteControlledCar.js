import React from 'react';
import Highlight from 'react-highlight.js';

const RemoteControlledCar = {
    title: 'Remote Controlled Car',
    subtitle: 'Controlling RC car by a phone application and RPi 2',
    summary: `This project will take you step by step with creating from scratch a working RC car, controlled by
              your phone's gyro movements. Live video stream constantly broadcast from the car's web camera into 
              your phone's application.`,
    readLink: "/projects/remoteControlledCar",
    githubLink: "https://github.com/alongu/RemoteControlledCar",
    demoLink: "https://www.youtube.com/watch?v=TEz1VJGgaME",
    article:
        <div>
            <h3>Introduction</h3>
            <p>
                Few years ago I wanted to explore the RPi 2 and java programming for android devices.
                Coding in those environments was new to me, and I figured the best way to learn and get some experience
                was by a developing my own project - the RC gyro car.
                I saw some old toys waiting to be thrown at my parents’ house,
                and figured I could use the body of a toy car as a basis for my project.
                The idea was to create it from scratch, hardware and software wise.
                The car would have to be controlled by the phone gyro, and use a camera to pass a live
                video stream to the phone.
            </p>
            <p>Watch the demo here:</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TEz1VJGgaME"></iframe>
            </div>
            <h3>Architecture and Protocol</h3>
            <p>
                The architecture of this project is pretty straight forward.
                The Raspberry PI behaves as a server, waiting for communication from the android device.
                Once communication was established, the android device sends its gyro's cordinates constantly -
                x, y and z coordinates over TCP to the RPi.
                The PI receives the data, parsing it and using its IO ports to control a servo
                for the car’s wheels traverse, and a half-bridge module to control the car’s movement
                forward and backward. Another port is being used to send the camera’s video output back to the phone.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="/images/Architecture.png"
                    style={{ width: "90%", height: "90%" }}>
                </img>
            </div>
            <h3>Prerequisites</h3>
            <ul>
                <li>Raspberry PI 2</li>
                <li>5V 3A portable power suppliy (for RPi, servo and bridge module)</li>
                <li>6V 3A portable power suppliy (for DC Motor)</li>
                <li>Wi-Fi module</li>
                <li>Half Bridge Module</li>
                <li>Servo</li>
                <li>DC Motor</li>
                <li>Web Camera</li>
                <li>RC Car body with 4 wheels</li>
                <li>Bread board, wires and soldering iron</li>
                <li>Basic programming knowledge in java, C and linux</li>
            </ul>
            <h3>Forward and Backward movement</h3>
            <p>
                The car moves backward and forward using a simple small 6V DC Motor.
                Controlling the motor’s speed and direction is done by a PWM channel from the PI to a half-bridge module.
                The H-bridge is capable of inversing the direction of the current flow thorough the motor,
                thus changing the car’s direction, while the PWM controls the car’s speed.
                The module I used for this project is SN7544-10NE by TI.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="/images/half-bridge.png"
                    style={{ width: "70%", height: "70%" }}>
                </img>
            </div>
            <p>
                The module needs 5V for its inner mosfets to work, and a constant 6V for the motor power.
                The motor Enable is connected to the PWM channel, while the forward and reverse pins are connected
                to different IO pins of the PI, to control the current’s flow direction.
            </p>
            <h3>What is PWM</h3>
            <p>
                PWM, or pulse width modulation is a technique which allows us to adjust the average value of the
                voltage that’s going to the electronic device by turning on and off the power at a fast rate.
                The average voltage depends on the duty cycle, or the amount of time the signal is ON versus the
                amount of time the signal is OFF in a single period of time.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="/images/pwm.png"
                    style={{ width: "70%", height: "70%" }}>
                </img>
            </div>
            <p>
                The PWM we can control the simply connected my PI’s PWM channel output to a servo for steering,
                and another PWM channel to a half-bridge module for controlling the DC motor’s speed.
            </p>
            <h3>Raspberry PI Configuration</h3>
            <p>
                In this project I was using the raspberry PI 2, which does not come with a Wi-Fi module
                (unlike version 3 which does). This mean that I had to buy and add a Wi-Fi dongle to it,
                because a wireless communication is needed of course. In addition,
                the RPI should have a static IP address, so our application can find it easily.
            </p>
            <br />
            <p>
                In order to config our raspberry PI 2 with a static IP address,
                you need to change the configuration file - /etc/network/interfaces, and edit it as follows:
            </p>
            <Highlight>{
                `source-directory /etc/network/interfaces.d

auto wlan0

allow-hotplug wlan0
iface wlan0 inet static
    address 192.168.43.155
    netmask 255.255.255.0
    network 192.168.43.0
    broadcast 192.168.43.255
    gateway 192.168.43.1
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf

iface default inet dhcp`}
            </Highlight>
            <p>
                As written above, my configuration for the network auto-connected
                is located in /etc/wpa_supplicant/wpa_supplicant.conf file.
                This confuguration file looks like this:
            </p>
            <Highlight>{
                `ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network = {
    ssid="myNetworkName"
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP TKIP
    group=CCMP TKIP
    psk="myPassword"
}`}
            </Highlight>
            <p>
                where the ssid is the network name, and psk will be your router password.
            </p>
            <h3>Communication Protocol</h3>
            <p>
                The protocol in which I used had to had the data for the vehicle movement, and was sent to the RPi over TCP:
            </p>
            <ul>
                <li>Direciton (forward / backward movement)</li>
                <li>Steering direction (right / left in degrees)</li>
                <li>Speed of the vehicle</li>
            </ul>
            <p>
                In order to achieve this I used a simple string which contained the following convention:
                Character 1 – header (“H”).
                Characters 2-3 – steering value in degrees (between 1-89, where 45 means moving straight)
                Character 4 – Direction of the vehicle (“U” – forward, “D”- backward)
                Characters 5-6 – Speed (0-50)
                For example: the string “H60U50” will cause the vehicle to move forward, with a right turn of 15 degrees, in full speed.
                This position messaging is sent to the vehicle every 80 ms for proccessing and updating its movement.
            </p>
            <h3>RPi Code</h3>
            <p>
                I’ve been using the Netbeans IDE for the development and debug of the C code for the PI. This code does few simple things:
            </p>
            <ul>
                <li>Initializes both PWM channels and I/O pins for controlling the servo for steering the car’s wheels
                    and for the engine that controls the car’s forward and backward movement.</li>
                <li>Creates a TCP socket and waits for communication and command from client.</li>
                <li>Runs an infinite loop that receives command from client,
                    parse those commands and activates the servo and the engine accordingly.</li>
            </ul>
            <h3>Setup of the PWM channels</h3>
            <p>
                In the raspberry PI 2 model B there are 2 available PWM channels in which we can use.
                They located under pins 12 and 35. In this project I’ve decided to use the BCM2835 library,
                which provides functions for configuring and controlling PWM output of these pins.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="/images/bcm-io.png"
                    style={{ width: "70%", height: "70%" }}>
                </img>
            </div>
            <p>
                In the raspberry PI 2 in order for a GPIO pin to emit output from its PWM channel,
                it must be set to ALT function, GPCLK0 ALT5 (19.2Mhz clock) in this project.
                In addition, both PWM channels are driven by the same PWM clock,
                whose clock divider can be varied using bcm2835_pwm_set_clock().
                The PWM clock is derived from a 19.2MHz clock.
            </p>
            <p>
                In my project I needed to control a servo and a motor.
                A servo needs a 50Hz frequency in order to work, while a DC motor can work with various frequencies.
                I’ve decided to work at 50Hz frequency with both, meaning that I had to divide the clock frequency
                by a 64 divider, and set the range of each channel to 6000 -> 19.2Mhz / 64 / 6000 = 50Hz.
            </p>
            <Highlight>{
                `#define ENGINE_PIN RPI_GPIO_P1_12
#define SERVO_PIN RPI_V2_GPIO_P1_35

#define ENGINE_PWM_CHANNEL 0
#define SERVO_PWM_CHANNEL 1

#define ENGINE_RANGE 6000
#define SERVO_RANGE 6000

if (!bcm2835_init())
    return 1;
bcm2835_pwm_set_mode(ENGINE_PWM_CHANNEL, 1, 0);
bcm2835_gpio_fsel(SERVO_PIN, BCM2835_GPIO_FSEL_ALT5);
bcm2835_gpio_fsel(ENGINE_PIN, BCM2835_GPIO_FSEL_ALT5);

// my calc -
// clock divider of 64 -> 19200000 / 64 = 300000
// Range for servo must be -> 6000 - to achive 50 Hz frequency (Channel 0)
// Range for Engine -> 6000 - will achive 50 Hz frequency (Channel 1))
bcm2835_pwm_set_clock(BCM2835_PWM_CLOCK_DIVIDER_64);
bcm2835_pwm_set_mode(SERVO_PWM_CHANNEL, 1, 1);
bcm2835_delay(100);
bcm2835_pwm_set_range(SERVO_PWM_CHANNEL, SERVO_RANGE);

bcm2835_pwm_set_mode(ENGINE_PWM_CHANNEL, 1, 1);
bcm2835_delay(100);
bcm2835_pwm_set_range(ENGINE_PWM_CHANNEL, ENGINE_RANGE);`}
            </Highlight>
            <p>
                In addition I’ve set the GPIOs pins numbers 16 and 18 for output purposes to control the H-bridge DC motor’s
                direction. This is done with the following code:
            </p>
            <Highlight>{
                `// Set the pin to be an output
bcm2835_gpio_fsel(RPI_GPIO_P1_16, BCM2835_GPIO_FSEL_OUTP);
bcm2835_gpio_fsel(RPI_GPIO_P1_18, BCM2835_GPIO_FSEL_OUTP);
bcm2835_gpio_write(RPI_GPIO_P1_16, LOW);
bcm2835_gpio_write(RPI_GPIO_P1_18, HIGH);`}
            </Highlight>
            <h3>Setup of TCP Communication</h3>
            <p>
                As mentioned above the PI needs to create a socket over some port and wait for client to connect to it
                and start sending commands.
                The following C code is doing just that over my PI’s static IP and over port 9999.
            </p>
            <Highlight>{
                `host_info.ai_family = AF_UNSPEC;     // IP version not specified. Can be both.
host_info.ai_socktype = SOCK_STREAM; // Use SOCK_STREAM for TCP or SOCK_DGRAM for UDP.
host_info.ai_flags = AI_PASSIVE;     // IP Wildcard

status = getaddrinfo("192.168.43.155", "9999", &host_info, &host_info_list);
socketfd = socket(host_info_list->ai_family, host_info_list->ai_socktype,
                  host_info_list->ai_protocol);
int yes = 1;
status = setsockopt(socketfd, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(int));
status = bind(socketfd, host_info_list->ai_addr, host_info_list->ai_addrlen);
status =  listen(socketfd, 5);

// Waiting for connection from client //
int new_sd;
struct sockaddr_storage their_addr;
socklen_t addr_size = sizeof(their_addr);
new_sd = accept(socketfd, (struct sockaddr *)&their_addr, &addr_size);`}
            </Highlight>
            <p>
                The processing code of the protocol takes place in a while loop of the program, under the main thread,
                while another process runs in the background and send the video back to phone.
                This is the code in which the core of the processing happens:
            </p>
            <Highlight>{
                `ssize_t bytes_recieved;
char incomming_data_buffer[50];

system("sudo service motion start"); // start motion 

while (1)
{
    bytes_recieved = recv(new_sd, incomming_data_buffer,1000, 0);
    
    if (incomming_data_buffer[0] == 'Q')
    {
        break;
    }
    
    if (incomming_data_buffer[0] == 'H')
    {
        // Servo Handling //
        RightLeft = (incomming_data_buffer[1] - '0') * 10 + (incomming_data_buffer[2] - '0');
        bcm2835_pwm_set_data(SERVO_PWM_CHANNEL, 600 - (3 * RightLeft)); // was 300 + instead of 600 -
        
        UpDown = ((incomming_data_buffer[4] - '0') * 10 + (incomming_data_buffer[5] - '0'))*120; // 50 MAX is 6000, while minimum is 0 (2%)
        if (incomming_data_buffer[3] == 'U')
        {
            bcm2835_gpio_write(RPI_GPIO_P1_16, HIGH);
            bcm2835_gpio_write(RPI_GPIO_P1_18, LOW);
        }
        else
        {
            bcm2835_gpio_write(RPI_GPIO_P1_16, LOW);
            bcm2835_gpio_write(RPI_GPIO_P1_18, HIGH);
        }
        
        bcm2835_pwm_set_data(ENGINE_PWM_CHANNEL, UpDown);
    }	
}

system("sudo service motion stop"); // stop motion

bcm2835_pwm_set_mode(ENGINE_PWM_CHANNEL, 1, 0);
bcm2835_delay(100);
bcm2835_pwm_set_mode(SERVO_PWM_CHANNEL, 1, 0);
bcm2835_delay(100);
bcm2835_close();
return 0;`}
            </Highlight>
            <p>
                It parses every character of the string protocol being sent to it from the client,
                and changes the PWM output and other GPIOs output accordingly, to adjust the movement of the vehicle.
            </p>
            <h3>Phone Application</h3>
            <p>
                The client part of this project was written in java in android studio for API 22 +.
                This code shuold be revisioned in the future, but I cannot find the time for it.
                Still - it shuold be easy to understand and manipulate for future/forked projects.
                Here I will only discuss the main core of the application.
                Entire code can be found at github: <a href="https://github.com/alongu/RemoteControlledCar" target="/">Remote Controlled Car App</a>
            </p>
            <p>
                This application has several simple java classes in it.
            </p>
            <ul>
                <li>Sensor.java - responsible for handling the phone's gyro x and y axis data.</li>
                <li>TCPClient - responsible for creating a socket against the RPi server and send meesages over TCP.</li>
                <li>WriteToBTDeviceTimer - responsible for the logic protocol sent to server (using Timer).</li>
                <li>MainActivity - entry point.</li>
            </ul>
            <h4>Sensor Handling</h4>
            <p>
                Sensor class implements the SensorEventListener interface.
                It uses a the SensorManager and a rotation matrix to get the values from onSensorChanged event,
                and extracts the X and Y axis in degrees from the gyro's orientation.
                Further reading: <a href="https://developer.android.com/guide/topics/sensors/sensors_position" target="/">Position Sensors</a>
            </p>
            <Highlight>{
                `public class Sensor implements SensorEventListener {

    private final int sensorType =  android.hardware.Sensor.TYPE_ROTATION_VECTOR;
    private SensorManager mSensorManager;
    private android.hardware.Sensor mRotationVectorSensor;
    private final float[] rotMat = new float[16];
    float[] vals = new float[3];
    public int y_Value = 10;
    public int x_Value = 10;

    @Override
    public void onAccuracyChanged(android.hardware.Sensor arg0, int arg1)
    {
        //Do nothing.
    }

    @Override
    public void onSensorChanged(SensorEvent event) {
        if (event.sensor.getType() == sensorType){
            SensorManager.getRotationMatrixFromVector(rotMat,event.values);
            SensorManager.remapCoordinateSystem(rotMat,SensorManager.AXIS_X, SensorManager.AXIS_Y,rotMat);
            SensorManager.getOrientation(rotMat, vals);

            // Optionally convert the result from radians to degrees
            y_Value = (int) Math.toDegrees(vals[1]);
            x_Value = (int) Math.toDegrees(vals[2]);
        }
    }

    public Sensor(Context context){
        mSensorManager = (SensorManager)context.getSystemService(context.SENSOR_SERVICE);
        mRotationVectorSensor = mSensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_ROTATION_VECTOR);
        mSensorManager.registerListener(this, mRotationVectorSensor, SensorManager.SENSOR_DELAY_GAME);

        // initialize the rotation matrix to identity
        rotMat[0] = 1;
        rotMat[4] = 1;
        rotMat[8] = 1;
        rotMat[12] = 1;
    }

    public void unregister(){
        mSensorManager.unregisterListener(this);
    }

    public void register(){
        mSensorManager.registerListener(this, mRotationVectorSensor, SensorManager.SENSOR_DELAY_GAME);
    }

}`}
            </Highlight>
            <h4>Protocol Handling</h4>
            <p>
                The core code for creating the protocol for the direction and speed of the RC car, is located at the WriteToBTDeviceTimer class.
                A timer sheduled to work with a period of 80 ms is activated, and in each period end it runs a code for extracting the current
                orientation data from the sensor, create the string protocol, and send it over TCP using the TCP client.
                Its main method for doing so is InitialTimerTask, and its core code looks like this:
            </p>
            <Highlight>{
                `String direction = "H";

// Handle left / right degrees protocol
finalDirection = sensor.y_Value + 45;
if (finalDirection >= 90) finalDirection = 89;
if (finalDirection <= 0) finalDirection = 1;
if (finalDirection >= 1 && finalDirection <= 9)
{
    direction += "0" + Integer.toString(finalDirection);
}
else
{
    direction += Integer.toString(finalDirection);
}

// Handle forward / backward movement direction
tempFinalSpeed = sensor.x_Value;
if (tempFinalSpeed >= 0)
{
    direction += "U";
}
else
{
    direction += "D";
}

// Handle Car's speed
tempFinalSpeed = Math.abs(tempFinalSpeed);
if (tempFinalSpeed < 8) tempFinalSpeed = 0;
if (tempFinalSpeed >= 50) tempFinalSpeed = 50;
finalSpeed = String.format("%02d", tempFinalSpeed);
direction += finalSpeed;

// Send string over TCP for RPi Server
messageSent = direction;
tcpClient.SendMessage(direction);`}
            </Highlight>
        </div>
};

export default RemoteControlledCar;