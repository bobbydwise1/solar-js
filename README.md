# _Galactic Age Calculator_

#### _A web application that can convert your age in Earth years into other ages on different planets._

#### By _Robert Lee_

## Description

_Write an application that determines a user’s age based on a different planet’s solar year length.  You must use npm, jasmine, and karma and TDD._

## Setup/Installation Requirements

_Setup requires the installation of node package manager (npm), jasmine, and karma._

* Clone the project from the git hub repository.
* Go to the project root directory.
* type "npm install"
* type "karma install"


## Technologies Used

_npm, jasmine, karma, Javascript, Jquery, Bootstrap, HTML, Git._

## Requirements
* Create a web application using npm, jasmine and karma that can convert your age, listed in solar Earth years, into solars years of the following planets.

The bussiness logic of the program must do the following:

* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
* Returns their age in Venus years. (A Venus year is .62 Earth years.)
* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

A user interface is not required.

#### Further Optional Components:
* Add a UI to your application.
* Return the date of a user’s next birthday on each planet.
* Return the age Keith Richards will be in dog years on the planet Jupiter in 2073.
* Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun.
* Make your application look nice and give it a solar theme!

#### Additional Requirements
* Create your specifications before doing any coding.
* There must be one test for each specification.

## Specifications
* In general, the conversion formula for turning earth years into another planet's years is:
  (Earth years)) / (Other planet's conversion factor (Earth years/planet year)) = (other planet's solar year).
  * For example, we have a hypothetical asteriod that takes exactly 2 earth years to orbit the Sun.  The conversion factor of this planet is 2.  If you are on planet earth for one year, what was the equalvalent of the other planet's year?

  (1 (Earth year)) / (2 (Earth year/asteriod year)) = 0.5 asteriod year.

  The answer is 1 earth year equals 0.5 of that asteriod's year.

* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
  * Input:  1
  * Output: 1 / 0.24 = 4.15
* Returns their age in Venus years. (A Venus year is .62 Earth years.)
  * Input:  1
  * Output: 1 / 0.62 = 1.63
* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  * Input:  1
  * Output: 1 / 1.88 = 0.53
* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  * Input:  1
  * Output: 1 / 11.86 = 0.08
* Determines how many years a user has left to live on each planet:
  * Create an equation that gives the life expectancy (LE) of a person based on some boolean functions.  Then apply a planet year conversion to this number.
    * Input:  create some true or false booleans.  If these are true, they will add a certian number of years to a person's LE.
    * Output:  (psuedo code:)  if ((x && y) && z) === true) {LE = 72 earth years}
    (72 (earth years)) / (other planet conversion factor) = (converted LE on other planet)
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.
  * Input:  The user says they are age 100.  The LE is 72.
  * Output:  72 - 100 = -28 (ex: they are 28 years beyond LE.)

## Known bugs

* Not all of the functionality for the user interface is in place.

### License

MIT License

Copyright (c) 2018, _Robert Lee_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
