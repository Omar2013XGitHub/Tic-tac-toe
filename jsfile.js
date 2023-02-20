let x = "X is the winner";
let o = "O is the winner";
let h1 = document.querySelector("h1");
let again = document.querySelector(".playagain");
let turn = x;
let run = document.querySelector('.run');
let nulls = document.querySelectorAll('.tile');
let arr = [[null,null,null],[null,null,null],[null,null,null]];
let winner = function (a) {
    h1.innerHTML = a;
    h1.classList.add("active");
    arr = Array(3).fill(Array(3).fill(null));
    nulls.forEach(ele => {
        if (ele.innerHTML == "") {
            ele.innerHTML = " ";
        }
    });
    again.classList.add("active");
}
again.onclick = function () {
    window.location.reload();
}
nulls.forEach(e => {
    e.onclick = function () {
        if (e.innerHTML == "") {
            e.innerHTML = turn[0];
            e.classList.add("active");
            eval(`arr${e.dataset.num} = "${turn}";`)
            if (arr[0][0] == turn && arr[1][0] == turn && arr[2][0] == turn) winner(turn);
            else if (arr[0][1] == turn && arr[1][1] == turn && arr[2][1] == turn) winner(turn);
            else if (arr[0][2] == turn && arr[1][2] == turn && arr[2][2] == turn) winner(turn);
            else if (arr[0][0] == turn && arr[0][1] == turn && arr[0][2] == turn) winner(turn);
            else if (arr[1][0] == turn && arr[1][1] == turn && arr[1][2] == turn) winner(turn);
            else if (arr[2][0] == turn && arr[2][1] == turn && arr[2][2] == turn) winner(turn);
            else if (arr[0][0] == turn && arr[1][1] == turn && arr[2][2] == turn) winner(turn);
            else if (arr[0][2] == turn && arr[1][1] == turn && arr[2][0] == turn) winner(turn);
            if (turn == o) turn = x;
            else if (turn == x) turn = o;
            if (arr.flat().filter(ele => ele == null).length == 0) winner("Draw");
        }
    }
})