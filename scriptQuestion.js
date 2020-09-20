const daily_q = ["What is one thing that would make today great?", "What is one thing you're looking forward to today?", "What are you grateful for today?", "What is one amazing thing that happened today?", "What is one cool thing you learned today?", "What is one song you really resonate with?", "What gives you purpose?"];

var ind;
ind = Math.floor(Math.random() * daily_q.length);
document.getElementById("dailyquestion").innerHTML += daily_q[ind];
daily_q.splice(ind,1);