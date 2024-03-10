import { useState } from "react";
import "./App.css";
import { RxCross2 } from "react-icons/rx";

function App() {
  const dataItems = [
    {
      id: 0,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkW9iFV61jxLoGxWcOOdRv0ATJpX_4GcPGfDMWPg8dWTGV4SGjD2UXZnHj_4gIMKAyN0Y&usqp=CAU",
      Name: "Rakesh",
      Emai: "rakesh0@gmai.com",
    },
    {
      id: 1,
      imgUrl:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
      Name: "Ram",
      Emai: "ram1@gmai.com",
    },
    {
      id: 2,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruWFn0SxoT8sV9s13_u1Ez3YaUq5cPAWTxTAZLnCwJHwDPUCwMW6vNl2flNrUTAorsRU&usqp=CAU",
      Name: "Rahul",
      Emai: "rahul2@gmai.com",
    },
    {
      id: 3,
      imgUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      Name: "Aman",
      Emai: "aman3@gmai.com",
    },
    {
      id: 4,
      imgUrl:
        "https://www.shutterstock.com/image-illustration/3d-render-attractive-cartoon-character-260nw-1933348058.jpg",
      Name: "Amit",
      Emai: "amit4@gmai.com",
    },
    {
      id: 5,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfLN1WlvtQxU_1T6_64e0CTYiD6Wy-Z4TueLuGcRS_v1d13RNuglNgcdkn82S58lVdnY&usqp=CAU",
      Name: "Sanjay",
      Emai: "sanjay5@gmai.com",
    },
    {
      id: 6,
      imgUrl:
        "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg",
      Name: "Shivam",
      Emai: "shivam6@gmai.com",
    },
  ];
  const [inputVal, setInputVal] = useState("");
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [isInputActive, setIsInputActive] = useState(0);

  console.log(selectedIndexes);
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onClickCapture={() => {
        setIsInputActive(0);
      }}
    >
      <div
        className="container"
        onClickCapture={() => {
          setIsInputActive(1);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "16rem",
          paddingTop: "8rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60vw",
            border: "2px solid black",
          }}
        >
          <div style={{ display: "flex" }}>
            {selectedIndexes.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={dataItems[ele].imgUrl}
                    style={{ width: 20, height: 20 }}
                  ></img>
                  <span>{dataItems[ele].Name}</span>
                  <span
                    onClick={() => {
                      setSelectedIndexes((oldArray) =>
                        oldArray.filter((x) => {
                          return x != ele;
                        })
                      );
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <RxCross2 />
                  </span>
                </div>
              );
            })}
          </div>
          <input
            value={inputVal}
            placeholder="Select name or email"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            id="inputContainer"
            style={{ width: "50%", padding: "10px", border: "0px solid white" }}
          ></input>
        </div>

        <div
          className="input-box"
          style={{
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            width: "20vw",
            backgroundColor: "#E0E0E0",
          }}
        >
          {isInputActive
            ? dataItems
                .filter((item) => {
                  return (
                    (item.Name.includes(inputVal) ||
                      item.Emai.includes(inputVal)) &&
                    !selectedIndexes.includes(item.id)
                  );
                })
                .map((item, ind) => {
                  return (
                    <div
                      onClick={() => {
                        if (!selectedIndexes.includes(item.id)) {
                          setSelectedIndexes((oldArray) => [
                            ...oldArray,
                            item.id,
                          ]);
                        }
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      key={ind}
                    >
                      <img
                        src={item.imgUrl}
                        style={{ width: 30, height: 30, marginRight: "20px" }}
                      ></img>
                      <span style={{ marginRight: "20px" }}>{item.Name}</span>
                      <span>{item.Emai}</span>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
