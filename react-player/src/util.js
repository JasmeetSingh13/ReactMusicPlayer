import {v4 as uuidv4} from "uuid";

function chillHop(){
    return[
        {
            name:"What If I Told You",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
            artist : "Juan Rios",
            id : uuidv4(),
            active :true,
            audio : "https://mp3.chillhop.com/serve.php/?mp3=21649",
            color:["#FCAB85","#D78568"],
        },
        {
            name: "Caravan",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist : "goosetaf, The Field Tapes, Makzo",
            id: uuidv4(),
            active:false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20122",
            color:["#BEA0D8","#9CAC44"],

        },
        {
            name: "Safe Haven",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist : "Oatmello, Makzo",
            id: uuidv4(),
            active:false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20123",
            color:["#BEA0D8","#9CAC44"],
        },
        {
            name: "Badlands",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist : "Hanz, Makzo",
            id: uuidv4(),
            active:false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20126",
            color:["#BEA0D8","#9CAC44"],
        }, 
        {
            name:"You",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
            artist : "Juan Rios",
            id : uuidv4(),
            active :false,
            audio : "https://mp3.chillhop.com/serve.php/?mp3=21649",
            color:["#FCAB85","#D78568"],
        },
        {
            name: "lands",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist : "Hanz, Makzo",
            id: uuidv4(),
            active:false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20126",
            color:["#BEA0D8","#9CAC44"],
        }, 
    ]
}

export default chillHop;