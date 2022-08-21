
        showtask();
        let addtaskinput = document.getElementById("addtaskinput");




        let addtaskbtn = document.getElementById("addtaskbtn");
        let savetaskbtnnn = document.getElementById("savetaskbtn");
        addtaskinput.addEventListener("keypress", function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (savetaskbtnnn.style.display == "block") {
                    document.getElementById("savetaskbtn").click();
                } else {
                    document.getElementById("addtaskbtn").click();
                }
            }
        })

        // if(savetaskbtnnn.style.display=="block"){
        // savetaskbtnnn.addEventListener("keypress", function (event) {
        //     if (event.key === 'Enter') {
        //         event.preventDefault();
        //         document.getElementById("savetaskbtn").click();
        //     }
        // })}





        //   Completedtasks
        function completedtasks() {
            let webtask = localStorage.getItem("hello");
            if (webtask == null) {
                complete = [];
            } else {
                complete = JSON.parse(webtask);
                console.log(complete);
            }
            let html = "";
            let addedtasklist = document.getElementById("addedtasklist");
            complete.forEach((item, index) => {
                if (item.completeStatus == true) {
                    taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
                } else {
                    taskCompleteValue = `<td>${item.task_name}</td>`;
                    console.log(index);
                }
                html += `<tr>
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
            });
            addedtasklist.innerHTML = html;
        }



        addtaskbtn.addEventListener("click", function () {
            addtaskinputval = addtaskinput.value;
            if (addtaskinputval.trim() != 0) {
                let webtask = localStorage.getItem("localtask");
                let check = JSON.parse(webtask);

                if (webtask == null) {
                    taskObj = [];
                } else {
                    taskObj = check;
                }
                console.log(taskObj);
                let original = taskObj.filter(function (data) {
                    if (data.task_name == addtaskinputval) {
                        return addtaskinputval
                    }
                })
                console.log(original)

                if (original.length == 0) {
                    taskObj.push({ task_name: addtaskinputval, completeStatus: false });
                    // console.log(taskObj, 'sibashis');
                    localStorage.setItem("localtask", JSON.stringify(taskObj));
                    document.getElementById("cars").value = "All";
                    addtaskinput.value = "";
                } else {
                    var modal = document.getElementById("myModall");

                    // Get the button that opens the modal
                    //var btn = document.getElementById("myBtn");

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("closee")[0];

                    // When the user clicks the button, open the modal
                    //btn.onclick = function() {
                    modal.style.display = "block";
                    //}

                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function () {
                        modal.style.display = "none";
                    };

                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            } else {
                var modal = document.getElementById("myModal");

                // Get the button that opens the modal
                //var btn = document.getElementById("myBtn");

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal
                //btn.onclick = function() {
                modal.style.display = "block";
                //}

                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                };

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
                let options = document.getElementById("cars").value;
                // part 1
                if (option === "completed") {
                    let completetask = localStorage.getItem("hello");
                    let completed = JSON.parse(completetask);
                    console.log(completed);
                    let statuscomplete = completed.filter(function (data) {
                        if (data.completeStatus == true) {
                            console.log("sibashis");
                            return data.task_name;
                        }
                    });
                    console.log(statuscomplete);
                    localStorage.setItem("hello", JSON.stringify(statuscomplete));
                    completedtasks();
                    // let statuscomplete= new Set(completed.map(v => v.completeStatus));
                    // for (keys in completed[mytargetid]){
                    //     console.log(mytargetid);
                    // }
                }
                // part2
                else if (options === "uncompleted") {
                    let uncomplete = localStorage.getItem("uncomplete");
                    let uncompleted = JSON.parse(uncomplete);
                    console.log(uncompleted);
                    let statuscomplete = uncompleted.filter(function (data) {
                        if (data.completeStatus == false) {
                            console.log("sibashis");
                            return data.task_name;
                        }
                    });
                    console.log(statuscomplete);
                    localStorage.setItem("uncomplete", JSON.stringify(statuscomplete));
                    uncompletedtasks();
                }

                // part3
                else {
                    console.log("all");
                    showtask();
                }
            }
            addtaskinput.focus();
            showtask();
            clear.style.display = "block"
        });





        // showtask
        function showtask() {
            let webtask = localStorage.getItem("localtask");
            if (webtask == null) {
                taskObj = [];
            } else {
                taskObj = JSON.parse(webtask);
                console.log(taskObj);
            }
            let html = "";
            let addedtasklist = document.getElementById("addedtasklist");
            taskObj.forEach((item, index) => {
                if (item.completeStatus == true) {
                    taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
                } else {
                    taskCompleteValue = `<td>${item.task_name}</td>`;
                    console.log(index);
                }
                html += `<tr>
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
            });
            addedtasklist.innerHTML = html;
        }

        // edittask
        function edittask(index) {
            let saveindex = document.getElementById("saveindex");
            let addtaskbtn = document.getElementById("addtaskbtn");
            let savetaskbtn = document.getElementById("savetaskbtn");
            let clear = document.getElementById("clear");
            saveindex.value = index;
            let options = document.getElementById("cars").value;
            console.log(options)
            if (options === "completed") {

                let webtask = localStorage.getItem("hello");
                let taskObj = JSON.parse(webtask);
                console.log("completed")

                addtaskinput.value = taskObj[index]["task_name"];
                addtaskinput.focus();
                addtaskbtn.style.display = "none";
                savetaskbtn.style.display = "block";
            } else if (options === "uncompleted") {

                let webtask = localStorage.getItem("uncomplete");
                let taskObj = JSON.parse(webtask);
                console.log("uncomplete")

                addtaskinput.value = taskObj[index]["task_name"];
                addtaskinput.focus();
                addtaskbtn.style.display = "none";
                savetaskbtn.style.display = "block";
            } else {

                let webtask = localStorage.getItem("localtask");
                let taskObj = JSON.parse(webtask);
                console.log("localhost")
                addtaskinput.value = taskObj[index]["task_name"];
                addtaskinput.focus();
                clear.style.display = "block"
                addtaskbtn.style.display = "none";
                savetaskbtn.style.display = "block";
            }
        }

        // savetask
        let savetaskbtn = document.getElementById("savetaskbtn");
        savetaskbtn.addEventListener("click", function () {

            let options = document.getElementById("cars").value;
            console.log(options);
            if (options === "completed") {
                let addtaskbtn = document.getElementById("addtaskbtn");
                let webtask = localStorage.getItem("hello");
                let taskObj = JSON.parse(webtask);
                let saveindex = document.getElementById("saveindex").value;

                for (keys in taskObj[saveindex]) {
                    if (keys == "task_name") {
                        taskObj[saveindex].task_name = addtaskinput.value;
                    }
                }
                // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
                //  taskObj[saveindex][task_name] = addtaskinput.value;
                savetaskbtn.style.display = "none";
                addtaskbtn.style.display = "block";
                // localStorage.setItem("localtask", JSON.stringify(taskObj));
                localStorage.setItem("hello", JSON.stringify(taskObj));
                //   localStorage.setItem("uncomplete", JSON.stringify(taskObj));
                completedtasks();
            } else if (options === "uncompleted") {
                let addtaskbtn = document.getElementById("addtaskbtn");
                let webtask = localStorage.getItem("uncomplete");
                let taskObj = JSON.parse(webtask);
                let saveindex = document.getElementById("saveindex").value;

                for (keys in taskObj[saveindex]) {
                    if (keys == "task_name") {
                        taskObj[saveindex].task_name = addtaskinput.value;
                    }
                }
                // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
                //  taskObj[saveindex][task_name] = addtaskinput.value;
                savetaskbtn.style.display = "none";
                addtaskbtn.style.display = "block";
                // localStorage.setItem("localtask", JSON.stringify(taskObj));
                // localStorage.setItem("hello", JSON.stringify(taskObj));
                localStorage.setItem("uncomplete", JSON.stringify(taskObj));
                uncompletedtasks();
            } else {
                let addtaskbtn = document.getElementById("addtaskbtn");
                let webtask = localStorage.getItem("localtask");
                let taskObj = JSON.parse(webtask);
                let saveindex = document.getElementById("saveindex").value;

                for (keys in taskObj[saveindex]) {
                    if (keys == "task_name") {
                        taskObj[saveindex].task_name = addtaskinput.value;
                    }
                }
                // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
                //  taskObj[saveindex][task_name] = addtaskinput.value;
                savetaskbtn.style.display = "none";
                addtaskbtn.style.display = "block";
                localStorage.setItem("localtask", JSON.stringify(taskObj));
                // localStorage.setItem("hello", JSON.stringify(taskObj));

                //   localStorage.setItem("uncomplete", JSON.stringify(taskObj));
                showtask();
            }
            addtaskinput.value = "";

            // showtask();
        });
        // deleteitem
        function deleteitem(index) {
            let webtask = localStorage.getItem("localtask");
            let taskObj = JSON.parse(webtask);
            taskObj.splice(index, 1);
            localStorage.setItem("localtask", JSON.stringify(taskObj));
            showtask();
        }

        //complete task
        /* function completetask(index){
      let webtask = localStorage.getItem("localtask");
      let taskObj = JSON.parse(webtask);
      taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
      let addedtasklist = document.getElementById("addedtasklist");
      addedtasklist.addEventListener("click", function(e){
          console.log(addedtasklist)
      })
      localStorage.setItem("localtask", JSON.stringify(taskObj));
      showtask();
  } */

        // completed
        function myfunction() {
            let option = document.getElementById("cars").value;
            // completed.addEventListener("click", function(){
            //     let completetask= localStorage.getItem("hello");
            //     let completed= JSON.parse(completetask);
            //   console.log(option);
            if (option === "completed") {
                let completetask = localStorage.getItem("hello");
                let completed = JSON.parse(completetask);
                console.log(completed);
                let statuscomplete = completed.filter(function (data) {
                    if (data.completeStatus == true) {
                        console.log("sibashis");
                        return data.task_name;
                    }
                });
                console.log(statuscomplete);
                localStorage.setItem("hello", JSON.stringify(statuscomplete));
                completedtasks();
                // let statuscomplete= new Set(completed.map(v => v.completeStatus));
                // for (keys in completed[mytargetid]){
                //     console.log(mytargetid);
                // }
            } else if (option === "uncompleted") {
                let uncomplete = localStorage.getItem("uncomplete");
                let uncompleted = JSON.parse(uncomplete);
                console.log(uncompleted);
                let statuscomplete = uncompleted.filter(function (data) {
                    if (data.completeStatus == false) {
                        console.log("sibashis");
                        return data.task_name;
                    }
                });
                console.log(statuscomplete);
                localStorage.setItem("uncomplete", JSON.stringify(statuscomplete));
                uncompletedtasks();
            } else {
                console.log("all");
                showtask();
            }
        }


        //Uncompleted tasks
        function uncompletedtasks() {
            let webtask = localStorage.getItem("uncomplete");
            if (webtask == null) {
                uncomplete = [];
            } else {
                uncomplete = JSON.parse(webtask);
                console.log(uncomplete);
            }
            let html = "";
            let addedtasklist = document.getElementById("addedtasklist");
            uncomplete.forEach((item, index) => {
                if (item.completeStatus == true) {
                    taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
                } else {
                    taskCompleteValue = `<td>${item.task_name}</td>`;
                    console.log(index);
                }
                html += `<tr>
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
            });
            addedtasklist.innerHTML = html;
        }





        // complete task
        let addedtasklist = document.getElementById("addedtasklist");
        addedtasklist.addEventListener("click", function (e) {
            // showtask();
            let webtask = localStorage.getItem("localtask");
            let taskObj = JSON.parse(webtask);
            console.log(taskObj);
            let mytarget = e.target;
            if (mytarget.classList[0] === "text-success") {
                let mytargetid = mytarget.getAttribute("id");

                // let taskValue = taskObj[mytargetid]['task_name'];

                mytargetpresibling =
                    mytarget.parentElement.previousElementSibling
                        .previousElementSibling;

                // let mynewelem = mytargetpresibling.classList.toggle("completed");
                // taskObj.splice(mytargetid,1,mynewelem);
                for (keys in taskObj[mytargetid]) {
                    if (keys == "completeStatus" && taskObj[mytargetid][keys] == true) {
                        taskObj[mytargetid].completeStatus = false;
                        // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                    } else if (
                        keys == "completeStatus" &&
                        taskObj[mytargetid][keys] == false
                    ) {
                        taskObj[mytargetid].completeStatus = true;
                        //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                    }
                }
                //}
                // showtask();
                localStorage.setItem("localtask", JSON.stringify(taskObj));
                localStorage.setItem("hello", JSON.stringify(taskObj));
                localStorage.setItem("uncomplete", JSON.stringify(taskObj));
                showtask();
            }
        });




        // deleteall
        let deleteallbtn = document.getElementById("deleteallbtn");
        deleteallbtn.addEventListener("click", function () {
            let savetaskbtn = document.getElementById("savetaskbtn");
            let addtaskbtn = document.getElementById("addtaskbtn");
            let webtask = localStorage.getItem("localtask");
            let taskObj = JSON.parse(webtask);
            if (webtask == null) {
                taskObj = [];
            } else {
                taskObj = JSON.parse(webtask);
                taskObj = [];
                console.log(taskObj);
            }
            savetaskbtn.style.display = "none";
            addtaskbtn.style.display = "block";
            localStorage.setItem("localtask", JSON.stringify(taskObj));
            localStorage.setItem("hello", JSON.stringify(taskObj));
            localStorage.setItem("uncomplete", JSON.stringify(taskObj));
            showtask();
        });




        // serachlist
        let searchtextbox = document.getElementById("searchtextbox");
        searchtextbox.addEventListener("input", function () {
            let trlist = document.querySelectorAll("tr");
            Array.from(trlist).forEach(function (item) {
                let searchedtext = item.getElementsByTagName("td")[0].innerText;
                let searchtextboxval = searchtextbox.value;
                let re = new RegExp(searchtextboxval, "gi");
                if (searchedtext.match(re)) {
                    item.style.display = "table-row";
                } else {
                    item.style.display = "none";
                }
            });
        });