import "./App.css";
import React, { useState, useEffect } from "react";

{
  /* 1. Write a react function that takes the following input:
   */
}
const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 },
];

function RoomList() {
  return (
    <div>
      {rooms.map((room) => {
        return (
          <ol>
            <li>{room.room_type}</li>
            <li>{room.vacant_rooms}</li>
            <li>{room.price}</li>
          </ol>
        );
      })}
    </div>
  );
}

{
  /* 2. Write a function in Javascript, which receives NUMBER and has the next logic: */
}
function ReceivesNum(n) {
  if (n % 2 === 0) {
    return <div>foo</div>;
  } else if (n % 7 === 0) {
    return <div>bar</div>;
  }
  if (n % 2 === 0 && n % 7 === 0) {
    return <div>foovar</div>;
  } else {
    return <div>{n}</div>;
  }
}

// 3. Let's say you have a file with a following structure:
const question3 = [
  { id: 1, name: "Dan", value: 150 },
  { id: 2, name: "Peter", value: 300 },
  { id: 3, name: "Mark", value: 400 },
  { id: 4, name: "Victor", value: 600 },
];

function SumValue() {
  var total = 0;
  for (var i = 0; i < question3.length; i++) {
    total += question3[i].value;
  }
  return <div>{total}</div>;
}

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((json) => {
          setAllData(json);
          setFilteredData(json);
        });
    }
    fetchData();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return Object.values(data).join("").toLowerCase().includes(value);
    });
    setFilteredData(result);
  };
  return (
    <div className="App">
      {/* 1. Write a react function that takes the following input:
       */}
      <div>
        {`1. Write a react function that takes the following input:
        rooms = [
            { room_type: "Queen", vacant_rooms: 5, price: 100 },
            { room_type: "Double", vacant_rooms: 3, price: 75 },
            { room_type: "Twin", vacant_rooms: 8, price: 60 }
          ];
        And produces the following output:
        <ol><li>Queen, 5, $100</li><li>Double, 3, $75</li><li>Twin, 8, $60</li></ol>
        `}
      </div>
      {RoomList()}

      <div>
        {`2. Write a function in Javascript, which receives NUMBER and has the next logic:
        a) it prints "foo" if NUMBER is divisible by 2;
        b) it prints "bar" if NUMBER is divisible by 7;
        c) it prints "foobar" if NUMBER is divisible by 14;
        d) it prints NUMBER value for other cases;
        note: NUMBER is a positive integer number;`}
      </div>
      {ReceivesNum(5)}

      <div>
        {`3. Let's say you have a file with a following structure:
        "id,name,value
        1,Dan,150
        2,Peter,300
        3,Mark,400
        4,Victor,600"`}
      </div>
      {SumValue()}

      <div>
        {`4. Refactor the code below.
        (do not create functions or constants, code refactor is required only)

        if (province == 'ONTARIO') {
          rate = ONTARIO_RATE;
          amt = base * ONTARIO_RATE;
          calc = 2 * basis(amt) + extra(amt) * 1.05;
        } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
          rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
          amt = base * rate;
          calc = 2 * basis(amt) + extra(amt) * 1.05;
          if (province == 'QUEBEC') {
              points = 2;
          }
        } else {
          rate = 1;
          amt = base;
          calc = 2 * basis(amt) + extra(amt) * 1.05;
        }`}
      </div>
      <div>
        {`
          function Refactor() {
        var province = ""; 
        var rate = "";
        var amt = "";
        var calc = 2 * basis(amt) + extra(amt) * 1.05;

        if (province === "ONTARIO") {
          rate = ONTARIO_RATE;
          amt = base * ONTARIO_RATE;
          calc;
        } else if (province === "QUEBEC" || province === "ALBERTA") {
          rate = province ? QUEBEC_RATE : ALBERTA_RATE;
          amt = base * rate;
          calc;
          if (province === "QUEBEC") {
            points = 2;
          }
        } else {
          rate = 1;
          amt = base;
          calc;
        }
      }`}
      </div>
      <div>
        {`5. Write a small react or react native app that uses this weather api:
        https://www.metaweather.com/api/ *
        Your app should allow the user to search for a city and see that day's forecast.
        Styling is not important, you can use default browser styles.
        `}
      </div>
      <input type="text" onChange={(event) => handleSearch(event)} />
      {filteredData.map((value, index) => {
        return (
          <div key={index}>
            <div>{value.name.common}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
// Thank you for applying to our React JS Developer position!

// Please submit all answers by email to dbncjobs@gmail.com along with your name and the best phone number to reach you at. The best way to submit your work is by creating a public github repo and sharing the link to the repo with us. There are five questions in this quiz, please answer all of them.

// Write a function in node.js that reads this file and returns the number, which is a sum of all "value" numbers from the file;

// *Note: some people have reported that this API does not have CORS enabled on their server, in this case if you are having difficulty with CORS you can launch chrome with CORS disabled: https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome or you can select a different API of your preference: https://rapidapi.com/category/Weather
