"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Austin Inmon
   Date:  2/19/19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/


/* Set the date displayed in the calendar */
var thisDay = new Date("Augest 24,2018");

// Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//function to generate calendae table

function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += "</table>";
      return calendarHTML;
}

//Function to write the calendar caption 

function calCaption(calDate) {
      //month array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      //Determine the current month 
      var thisMonth = calDate.getMonth();

      //determine the current year
      var thisYear = calDate.getFullYear();

      // Write the caption 
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}