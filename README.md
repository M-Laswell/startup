You know in college that annoying feeling of not being sure if you forgot an assignment? Or the pit of despair you felt in your stomach when you forgot to turn something in? With the assignment tracker, we are trying to turn that into a thing of the past with a nice simple spreadsheet view of which assignments you need to get done ordered by date. Between the email and text reminder options all types of users can be catered too. Anyone with deadlines can use it just as easily! it's like having your own personal assistant there to remind you of what you need to do in the day. Easy to use simple to read and set up. There to help you get done what you need.


https://ninjamock.com/s/3V2TVKx

![PXL_20230128_053856948](https://user-images.githubusercontent.com/60703232/215248317-67cf2e04-f9d2-4c7c-8c7b-a2604e0ceced.jpg)


key features 

Secure login over HTTPS

easy to read date ordered graph of assignments and due dates (inserted by user)

email and/or text reminders of items coming up on the graph

friends

due date/assignment sharing between people

ssh -i C:/Users/mlaswell/.ssh/Production.pem ubuntu@13.58.21.220
exit

http://assignmenttracker.click/

for pushing to site(simon)

connect first
then
rm -rf(remove write protected files without confirmation) services/simon/public
mkdir -p services/simon/public (remake the directory)
then 
scp -r -i "C:/Users/mlaswell/.ssh/Production.pem" C:/Users/mlaswell/source/repos/simon/*(asterix is so it moves whatever files are in the folder not the whole folder) ubuntu@assignmenttracker.click:services/simon/public

simon css 

IN ALL THE CSS HEADERS
<link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
Gotta div most stuff up for css to work correctly spacing and overlap wise
in the body class the text element honestly doesnt seem to do anything and its all from the css code
html elements denoted with a period followed by the details for the item 
display flex so that it changes based on device

startup httml/css/javascript


changed all the colors up  you can change the colors on specfic sections by using style="background-color:#344461;" or style="color:#344461;" depending on if its for text or the background for html or css its color: #3444461
can change links specifically by adding a style section in the head with a:(link,visited,etc) { color: #344461}
changed from an assignmeent tracker to a pong game since i couldnt find a good way too include all the elements in my previous idea ound a simple js pong gamee @ https://codepen.io/gdube/pen/JybxxZ and am modifying it for my use modifications include muteing noises, changing controls, colors, number of matchs, etc.
changed so match will continue until ai beats player by two points added controls for mobile and cursor. highscores now populates based off local data and login collects users name and displays it on the plays screen updates to about section with finicky stuff about game and how it works
good to keep in mind 
can lable things in html that can then be referenced in the javs script to make use of DOM example
html
<thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores"></tbody>
js
const scoresText = localStorage.getItem('scores');
 if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  
    const tableBodyEl = document.querySelector('#scores');
event listeners include touch keyboard and mouse movement when string functions together important to make sure one function isnt taking so long it doesnt reach the ones after it in time
for mobile use its better to keep everything fluid and based off screen size rather than using set amounts of pixels
can save items in browser local storage and pull them with their ids
localStorage.setItem('scores', JSON.stringify(scores));
localStorage.getItem('scores');

startup service 

hard to make sure mongo db is working correctly when using enviroment variables that part is worth testing to make sure you have messed anything up
when pulling an api that gives an array of variables instead of just one use[random] with a random num generator to pull a random entry from the array 
use bcrypt for an easy password hash solution for security on the db and uuid for tokens
for eniro var use command sudo vi /etc/environment
bootstrap good for styling 



