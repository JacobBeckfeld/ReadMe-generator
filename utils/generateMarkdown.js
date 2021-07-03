// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if( license === "Apache"){
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    }
    else if(license === "Boost"){
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`
    }
    else if(license === "BSD"){
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
    }
    else if(license === "Eclipse"){
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache"){
    return `http://www.apache.org/licenses/`
  }
  else if(license === "Boost"){
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
  else if(license === "BSD"){
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  else if(license === "Eclipse"){
    return `https://www.eclipse.org/legal/epl-2.0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "Apache"){
    return `Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.`
  }
  else if(license === "Boost"){
    return `//          Copyright Joe Coder 2004 - 2006.
    // Distributed under the Boost Software License, Version 1.0.
    //    (See accompanying file LICENSE_1_0.txt or copy at
    //          https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if(license === "BSD"){
    return `THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  }
  else if(license === "Eclipse"){
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  Made be ${data.name}
${renderLicenseBadge(data.license)}

## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
## Installation
${data.instalation}

## Usage
${data.usage}

## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributers}

${data.github}
https://${data.email}
`;
}

module.exports = generateMarkdown;
