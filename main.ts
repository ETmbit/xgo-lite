/*
File:      github.com/ETmbit/xgo-lite.ts
Copyright: ETmbit, 2026

License:
This file is part of the ETmbit extensions for MakeCode for micro:bit.
It is free software and you may distribute it under the terms of the
GNU General Public License (version 3 or later) as published by the
Free Software Foundation. The full license text you find at
https://www.gnu.org/licenses.

Disclaimer:
ETmbit extensions are distributed without any warranty.

Dependencies:
ETmbit/general
*/

enum ArmPosition {
    //% block="high up""
    //% block.loc.nl="ver omhoog"
    High, // X:40,Z90
    //% block="straight to the front"
    //% block.loc.nl="recht naar voren"
    Front, // X:70,Z:80
    //% block="low to the front"
    //% block.loc.nl="laag naar voren"
    Low, // X:90,Z:50
    //% block="to the floor"
    //% block.loc.nl="naar de vloer"
    Floor // X:80,Z:10
}

enum ClampState {
    //% block="close"
    //% block.loc.nl="sluit"
    Close,
    //% block="open"
    //% block.loc.nl="open"
    Open
}

enum Performance {
    //% block="stand up"
    //% block.loc.nl="staan"
    Stand,
    //% block="lay down"
    //% block.loc.nl="liggen"
    Prone,
    //% block="sit down"
    //% block.loc.nl="zitten"
    Sit,
    //% block="swing"
    //% block.loc.nl="swingen"
    Swing,
    //% block="greet"
    //% block.loc.nl="groeten"
    Greet,
    //% block="roll"
    //% block.loc.nl="schudden"
    Roll,
    //% block="whirl"
    //% block.loc.nl="wervelen"
    Whirl,
    //% block="crawl"
    //% block.loc.nl="besluipen"
    Crawl,
    //% block="stretch"
    //% block.loc.nl="uitrekken"
    Stretch,
    //% block="squat"
    //% block.loc.nl="hurken"
    Squat,
    //% block="pee"
    //% block.loc.nl="plassen"
    Pee
}

/*
The xgo namespace is a refactoring of the ElecFreaks 'pxt-xgo' library:
https://github.com/elecfreaks/pxt-xgo/blob/master/main.ts
(MIT-license)
*/

//##########  BEGIN XGO  ##########//

namespace xgo {

    export function exec_action(action: Performance) {
        let commands_buffer = pins.createBuffer(9)
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x3E
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        switch (action) {
            case Performance.Stand:
                commands_buffer[5] = 0xFF
                commands_buffer[6] = 0xB9
                serial.writeBuffer(commands_buffer)
                basic.pause(1000)
                break
            case Performance.Prone:
                commands_buffer[5] = 0x01
                commands_buffer[6] = 0xB7
                serial.writeBuffer(commands_buffer)
                basic.pause(3000)
                break
            case Performance.Crawl:
                commands_buffer[5] = 0x03
                commands_buffer[6] = 0xB5
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Whirl:
                commands_buffer[5] = 0x04
                commands_buffer[6] = 0xB4
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Squat:
                commands_buffer[5] = 0x06
                commands_buffer[6] = 0xB2
                serial.writeBuffer(commands_buffer)
                basic.pause(4000)
                break
            case Performance.Roll:
                commands_buffer[5] = 0x07
                commands_buffer[6] = 0xB1
                serial.writeBuffer(commands_buffer)
                basic.pause(4000)
                break
            case Performance.Pee:
                commands_buffer[5] = 0x0B
                commands_buffer[6] = 0xAD
                serial.writeBuffer(commands_buffer)
                basic.pause(7000)
                break
            case Performance.Sit:
                commands_buffer[5] = 0x0C
                commands_buffer[6] = 0xAC
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Greet:
                commands_buffer[5] = 0x0D
                commands_buffer[6] = 0xAB
                serial.writeBuffer(commands_buffer)
                basic.pause(7000)
                break
            case Performance.Stretch:
                commands_buffer[5] = 0x0E
                commands_buffer[6] = 0xAA
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                basic.pause(5000)
                break
            case Performance.Swing:
                commands_buffer[5] = 0x10
                commands_buffer[6] = 0xA8
                serial.writeBuffer(commands_buffer)
                basic.pause(7000)
                break
            /*
            // AVAILABLE ACTIONS IN THE ORIGINAL CODE:
            // not so different from Performance.Stand above
            case Performance.Stand:
                commands_buffer[5] = 0x02
                commands_buffer[6] = 0xB6
                serial.writeBuffer(commands_buffer)
                basic.pause(3000)
                break
            case Performance.Sur_place:
                commands_buffer[5] = 0x05
                commands_buffer[6] = 0xB3
                serial.writeBuffer(commands_buffer)
                break
            
            // not so good looking actions:
            case Performance.Twirl_Pitch:
                commands_buffer[5] = 0x08
                commands_buffer[6] = 0xB0
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Twirl_Yaw:
                commands_buffer[5] = 0x09
                commands_buffer[6] = 0xAF
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Triaxial_rotation:
                commands_buffer[5] = 0x0A
                commands_buffer[6] = 0xAE
                serial.writeBuffer(commands_buffer)
                basic.pause(7000)
                break
            case Performance.Request_feeding:
                commands_buffer[5] = 0x11
                commands_buffer[6] = 0xA7
                serial.writeBuffer(commands_buffer)
                basic.pause(4000)
                break
            
            // actions that are not understood well:
            case Performance.Looking_for_food:
                commands_buffer[5] = 0x12
                commands_buffer[6] = 0xA6
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                break
            case Performance.Handshake:
                commands_buffer[5] = 0x13
                commands_buffer[6] = 0xA5
                serial.writeBuffer(commands_buffer)
                basic.pause(5000)
                basic.pause(5000)
                break
            */
        }
    }

    export function init_action() {
        let commands_buffer = pins.createBuffer(9)
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x3E
        commands_buffer[5] = 0xFF
        commands_buffer[6] = ~(0x09 + 0x00 + 0x3E + 0xFF)
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        serial.writeBuffer(commands_buffer)
        basic.pause(1000)
    }

    export function move_xgo(direction: Movement, speed: number) {
        let move_buffer = pins.createBuffer(9)
        move_buffer[0] = 0x55
        move_buffer[1] = 0x00
        move_buffer[2] = 0x09
        move_buffer[3] = 0x00
        move_buffer[7] = 0x00
        move_buffer[8] = 0xAA
        if (speed > 100)
            speed = 100
        if (speed < 0)
            speed = 0
        switch (direction) {
            case Movement.Forward:
                move_buffer[4] = 0x30
                move_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                move_buffer[6] = ~(0x09 + 0x00 + 0x30 + move_buffer[5])
                break
            case Movement.Backward:
                move_buffer[4] = 0x30
                move_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                move_buffer[6] = ~(0x09 + 0x00 + 0x30 + move_buffer[5])
                break
            case Movement.Left:
                move_buffer[4] = 0x31
                move_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                move_buffer[6] = ~(0x09 + 0x00 + 0x31 + move_buffer[5])
                break
            case Movement.Right:
                move_buffer[4] = 0x31
                move_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                move_buffer[6] = ~(0x09 + 0x00 + 0x31 + move_buffer[5])
                break
        }
        serial.writeBuffer(move_buffer)
    }

    export function rotate_xgo(direction: Turn, speed: number) {
        let rotate_buffer = pins.createBuffer(9)
        rotate_buffer[0] = 0x55
        rotate_buffer[1] = 0x00
        rotate_buffer[2] = 0x09
        rotate_buffer[3] = 0x00
        rotate_buffer[4] = 0x32
        rotate_buffer[7] = 0x00
        rotate_buffer[8] = 0xAA
        if (speed > 100)
            speed = 100
        if (speed < 0)
            speed = 0
        switch (direction) {
            case Turn.Right:
                rotate_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                rotate_buffer[6] = ~(0x09 + 0x00 + 0x32 + rotate_buffer[5])
                break
            case Turn.Left:
                rotate_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                rotate_buffer[6] = ~(0x09 + 0x00 + 0x32 + rotate_buffer[5])
                break
        }
        serial.writeBuffer(rotate_buffer)
    }

    export function clamp_xpos(mm: number = 50) {
        let commands_buffer = pins.createBuffer(9)
        if (mm > 100)
            mm = 100
        if (mm < 0)
            mm = 0
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x73
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        commands_buffer[5] = Math.map(mm, 0, 100, 0, 255)
        commands_buffer[6] = ~(0x09 + 0x00 + 0x73 + commands_buffer[5])
        serial.writeBuffer(commands_buffer)
        basic.pause(3000)
    }

    export function clamp_zpos(mm: number) {
        let commands_buffer = pins.createBuffer(9)
        if (mm > 100)
            mm = 100
        if (mm < 0)
            mm = 0
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x74
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        commands_buffer[5] = Math.map(mm, 0, 100, 0, 255)
        commands_buffer[6] = ~(0x09 + 0x00 + 0x74 + commands_buffer[5])
        serial.writeBuffer(commands_buffer)
        basic.pause(3000)
    }

    export function clamp_width(mm: number) {
        let commands_buffer = pins.createBuffer(9)
        if (mm > 255)
            mm = 255
        if (mm < 0)
            mm = 0
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x71
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        commands_buffer[5] = mm
        commands_buffer[6] = ~(0x09 + 0x00 + 0x71 + commands_buffer[5])
        serial.writeBuffer(commands_buffer)
        basic.pause(3000)
    }
}

serial.redirect(SerialPin.P14, SerialPin.P13, BaudRate.BaudRate115200)
xgo.init_action()

//##########  END XGO  ##########//

//% color="#82200C" icon="\uf1b0"
//% block="XGO Lite"
//% block.loc.nl="XGO Lite"
namespace XGoLite {

    // Speed range:
    // ------------
    // Value: 0 to 100 (in %)
    let speed: number = 50

    // Clamp range
    // -----------
    // Minimum value: 0 (equal to 53.0 mm)
    // Maximum value: 255 (equal to 22.5 mm)
    let clampClosed: number = 255
    let clampOpen: number = 0

    //% subcategory="Robotarm" color="#82705C"
    //% block="clamp size: closes to %closed mm and opens to %open mm width"
    //% block.loc.nl="grijper afmeting: sluit tot %closed mm en opent tot %open mm breedte"
    //% closed.min=25 closed.max=50.0 closed.defl=25
    //% open.min=25 open.max=50.0 open.defl=50
    // The motor takes a value range of 255 (closed) to 0 (open).
    // The input in mm should be multiplied by (255-0)/(50-25) therefore.
    export function setClampRange(closed: number, open: number) {
        closed = (closed - 25) * 10.2
        open = (open - 25) * 10.2
        if (open > closed) {
            // input was inverted
            let n = closed
            closed = open
            open = n
        }
        clampOpen = open
        clampClosed = closed
    }

    //% subcategory="Robotarm" color="#82705C"
    //% block="%state the clamp"
    //% block.loc.nl="%state de grijper"
    export function clamp(state: ClampState) {
        if (state == ClampState.Open)
            xgo.clamp_width(clampOpen)
        else
            xgo.clamp_width(clampClosed)
    }

    //% subcategory="Robotarm" color="#82705C"
    //% block="move the arm %move"
    //% block.loc.nl="beweeg de arm %move"
    export function moveArm(position: ArmPosition) {
        switch (position) {
            case ArmPosition.High:
                xgo.clamp_xpos(40)
                xgo.clamp_zpos(90)
                break
            case ArmPosition.Front:
                xgo.clamp_xpos(70)
                xgo.clamp_zpos(80)
                break
            case ArmPosition.Low:
                xgo.clamp_xpos(90)
                xgo.clamp_zpos(50)
                break
            case ArmPosition.Floor:
                xgo.clamp_xpos(80)
                xgo.clamp_zpos(10)
                break
        }
    }

    //% block="stop"
    //% block.loc.nl="stop"
    export function stop() {
        xgo.rotate_xgo(Turn.Left, 0)
        xgo.move_xgo(Movement.Forward, 0)
        xgo.move_xgo(Movement.Left, 0)
    }

    //% block="perform the %action"
    //% block.loc.nl="ga %action"
    export function perform(action: Performance) {
        xgo.exec_action(action)
    }

    //% block="stop turning"
    //% block.loc.nl="stop met draaien"
    export function turnStop() {
        xgo.rotate_xgo(Turn.Left, 0)
    }

    //% block="turn %rotation"
    //% block.loc.nl="draai %rotation"
    export function turn(rotation: Rotate) {
        xgo.move_xgo(Movement.Left, 0)
        if (rotation == Rotate.AntiClockwise)
            xgo.rotate_xgo(Turn.Left, 100)
        else
            xgo.rotate_xgo(Turn.Right, 100)
    }

    //% block="walk %movement"
    //% block.loc.nl="loop naar %movement"
    export function move(movement: Movement) {
        switch (movement) {
            case Movement.Forward:
                xgo.move_xgo(Movement.Left, 0)
                xgo.rotate_xgo(Turn.Left, 0)
                xgo.move_xgo(Movement.Forward, speed)
                break
            case Movement.Backward:
                xgo.move_xgo(Movement.Left, 0)
                xgo.rotate_xgo(Turn.Left, 0)
                xgo.move_xgo(Movement.Backward, speed)
                break
            case Movement.Left:
                // left and right seem to have switched
                xgo.move_xgo(Movement.Right, speed)
                break
            case Movement.Right:
                // left and right seem to have switched
                xgo.move_xgo(Movement.Left, speed)
                break
        }
    }

    //% block="set speed to %speed \\%"
    //% block.loc.nl="stel de snelheid in op %speed \\%"
    //% speed.min=0 speed.max=100 speed.defl=50
    export function setSpeed(speed: number) {
        if (speed > 100) speed = 100
        if (speed < 0) speed = 0
        speed = speed;
    }
}
