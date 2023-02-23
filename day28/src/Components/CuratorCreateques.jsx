import { Button } from "@mui/material";
import { React, useState } from "react";
import { GrAdd, GrUpload } from "react-icons/gr";
// import "../styles/createQues.css";
// import { Trash } from "../utils/Trash";
// import { Edit } from "../utils/Edit";
import Search from "@mui/icons-material/Search";
// import axios from "axios";
// import { USER_SERVER } from "../Config";
export const CuratorCreateques = () => {
  const [quesType, setQuesType] = useState("multiple");
  const [value, setValue] = useState("");
  const [opt_arr, setOptArr] = useState([
   { opt:"Option A",key:1},
   { opt:"Option b",key:2},
   { opt:"Option c",key:3},
   { opt:"Option d",key:4},
  ]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("aaaa");
    try {
      const data = new FormData(event.currentTarget);
      const questionType = data.get("ques-type");
      const quesData = {
        questions: data.get("question"),
        questionType: data.get("ques-type"),
        topic: data.get("search"),
        difficulty: data.get("difficulty"),
        remarks: data.get("remarks"),
        img_url: data.get("img-url"),
        timeBased: data.get("lmt-life"),
      };
      if (questionType === "one-word") {
        quesData.answer = data.get("one-word-ans");
      } else if (questionType === "multiple") {
        quesData.options = opt_arr;
      }

    //   console.log(quesData, opt_arr);
      //   const response = await axios.post(`${USER_SERVER}/newquiz`, quesData);
      //   console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-ques-wrapper">
      <form onSubmit={(e) => handleSubmit(e)} className="create-form">
        <div className="form">
          <div className="form-left">
            <div className="grp-form">
              <div className="form-control difficulty">
                <label>Difficulty</label>
                <select name="difficulty">
                  <option value="" disabled>
                    Select difficulty
                  </option>
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
                </select>
              </div>

              <div className="form-control search-box">
                <label>Topic</label>
                <div className="search">
                  <input
                    name="search"
                    type="search"
                    placeholder="Enter / Search Topic"
                  />
                  <div>
                    <Search />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control ques">
              <div className="ques-dv">
                <label>Question</label>
                <div className="lmt-life">
                  <label htmlFor="lmt-life">Limited life question</label>
                  <input id="lmt-life" name="lmt-life" type="checkbox" />
                </div>
              </div>
              <textarea
                placeholder="Type your question here"
                name="question"
                rows={10}
              />
            </div>

            <div className="form-control remark">
              <label>Remarks</label>
              <textarea
                placeholder="Add remarks for your question"
                name="remarks"
                rows={5}
              />
            </div>

            <div className="form-control image-box">
              <label>Image</label>
              <div className="img-upl">
                <input
                  name="img-url"
                  type="input"
                  placeholder="Add Source ( URL / name )"
                />
                <label htmlFor="file" className="choose-file">
                  <GrUpload />
                  <span>Upload</span>
                  <input id="file" type="file" />
                </label>
              </div>
            </div>
          </div>

          <div className="form-right">
            <div className="form-control select-ques-type">
              <label>Type</label>
              <select
                onChange={(e) => {
                  setQuesType(e.target.value);
                }}
                name="ques-type"
              >
                <option value="multiple">Multiple choice</option>
                <option value="one word">one word answer</option>
              </select>
            </div>

            <div
              className={`options form-control ${
                quesType === "multiple" ? "" : "show"
              }`}
            >
              <label>Multiple Choice</label>
              <div className="options-cont">
                {opt_arr.map((item, index) => {
                    const {opt,key} = item
                  return (
                    <div key={key} className="option">
                        
                      <input placeholder={opt} value={value} onChange={(e)=>{
                        console.log(e.target.value);
                      }} className="option-inp"/>
                      <div className="opt-btn">
                        <div>
                          {/* <Edit /> */}
                        </div>
                        <div
                          onClick={() => {
                            setOptArr((opt_arr) =>
                              opt_arr.filter((opt, idx) => idx !== index)
                            );
                          }}
                        >
                          {/* <Trash /> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button
                onClick={() => {
                  setOptArr((opt_arr) => [...opt_arr, {opt:"Option X",key:Math.random()}]);
                }}
                variant="contained"
              >
                <GrAdd />
              </Button>
            </div>

            <div
              className={`one-word-wrappper ${
                quesType == "one word" ? "" : "show"
              }`}
            >
              <div className="form-control">
                <label>Answer</label>
                <input placeholder="Enter answer" name="one-word-ans" />
              </div>
              <div className="form-control ans-remark">
                <label>Remarks</label>
                <textarea
                  name="one-word-remark"
                  placeholder="Add remarks for the question"
                  rows={5}
                />
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </div>
  );
};
