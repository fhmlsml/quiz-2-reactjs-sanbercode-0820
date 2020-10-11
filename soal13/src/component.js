import React from 'react';

function Component() {
    const data = [
        { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" },
        { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" },
        { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" },
        { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" },
    ];

    let dataDiri = data.map((data,i) => {
        let mister;
        if (data.gender == "Male") {
            mister = "Mr";
        } else if (data.gender == "Female") {
            mister = "Mrs";
        }
      
        return (
            <div className="data" key={i}>
                <img src={data.photo} ></img>
                <h4>{mister} {data.name}</h4>
                <p>{data.profession}</p>
                <p>{data.age} years old</p>
            </div>
        );
    });
    return dataDiri;
}


class Components extends React.Component {
    render() {
        return (
            <div className="card">
                <Component/>
            </div>
        );
    }
}



export default Components;
