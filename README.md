This is my Patch.com coding assessment 

## Project Requirements
To create a mashup of 2 (or more!) data sources and present the results in an appropriate UI.  If possible, the data sources should be endpoints you can hit with an ajax call (as opposed to hard-coding in raw data).  The data sources, the presentation, and underlying language & framework/libraries used are all your choice.  This is a chance to be creative and also show off your skills.

## Endpoints Used 

##### `http://newsapi.org/v2/everything?q='+ searchWord +'&from=' + todaysDate +'&sortBy=publishedAt&apiKey=f9b70e839a1b47e2a8b11a8ad054ec62`

A free News API endpoint displayed as a coursel.  It is searchable by inputting a word vlue into the search bar.  The search term cannot be null or empty so the default vaule is "today" 

##### `https://api.worldtradingdata.com/api/v1/forex_history`

A free API endpoint from World Trading Data.  This outputs a history data of the US dollar to pound sterling conversion into a line chart.  

## Prerequisites

Have npm locally installed 

### `npm -v`

Should output the version value of your npm.  If no value outputs, you should install

I like using homebrew for installations so install homebrew by opening your terminal and typing in 

```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" ```

once complete now you can install npm 

### `brew install node`

this installs the latest version of node onto your machine and you can now run npm commands

## Run locally

Make sure you have npm installed on your machine 

### `npm install`

install the necessary node modules for this project

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

