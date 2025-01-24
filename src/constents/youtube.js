import { FaUniversity } from "react-icons/fa";

export const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_API="AIzaSyCoL_vVIuzheKRYmztT3orVQDBYwDvzRIQ"
export const YOUTUBE_VIDEO_URL =` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${YOUTUBE_API}`



//random name genrator 

const nameList = [
   'Aarav', 'Vivaan', 'Aditya', 'Arjun', 'Karthik', 'Raj', 'Rohan', 'Siddharth', 'Yash', 'Amit',  
'Neha', 'Priya', 'Ananya', 'Deepika', 'Kavya', 'Ishita', 'Swati', 'Sneha', 'Ritu', 'Pooja',  
'Rahul', 'Vikram', 'Harsh', 'Sandeep', 'Nitin', 'Manish', 'Tarun', 'Rajesh', 'Mohit', 'Abhishek',  
'Gaurav', 'Rohit', 'Vivek', 'Pranav', 'Akash', 'Omkar', 'Richa', 'Shweta', 'Simran', 'Tanya',  
'Meera', 'Divya', 'Sonali', 'Bhavna', 'Preeti', 'Shruti', 'Anjali', 'Alok', 'Suraj', 'Arvind','Ashwin', 'Balaji', 'Chirag', 'Dinesh', 'Esha', 'Farhan', 'Gopal', 'Hema', 'Indira', 'Jatin',  
'Kiran', 'Lakshmi', 'Madhav', 'Naveen', 'Ojas', 'Prakash', 'Quasar', 'Ramesh', 'Suhana', 'Tanvi',  
'Utkarsh', 'Vaani', 'Wasim', 'Yuvraj', 'Zeenat', 'Bhaskar', 'Chaitanya', 'Devika', 'Eknath', 'Falguni'


  ];
export   const generateName =()=> {
  return nameList[Math.floor(Math.random() * nameList.length)];
       
      };


      const messageList = [
        'This is amazing!', 'Great content!', 'Loved it!', 'Nice work!', 'Keep it up!', 
        'So cool!', 'Wow, awesome!', 'Nice editing!', 'Subscribed!', 'More videos please!', 
        'Best video ever!', 'Very informative!', 'Superb job!', 'Keep improving!', 'So relatable!', 
        'Funny and entertaining!', 'Loved the vibe!', 'This made my day!', 'Keep shining!', 'Interesting topic!', 
        'Good effort!', 'Perfectly explained!', 'Waiting for next video!', 'Incredible work!', 'Such good quality!', 
        'Enjoyed watching this!', 'Well presented!', 'Great energy!', 'Simply the best!', 'Nice background music!', 
        'Mind-blowing!', 'Too good!', 'Such a talent!', 'Impressive skills!', 'Big fan!', 'Great storytelling!', 
        'Very useful!', 'Eye-opening content!', 'Thumbs up!', 'Really helpful!', 'Nice visuals!', 
        'Creative content!', 'Wow, loved it!', 'Very entertaining!', 'Excellent job!', 'Can’t stop watching!', 
        'You’re amazing!', 'Super talented!', 'On point!', 'A must-watch!', 'Totally agree!'
      ];
    export   const generateMessage = () => {
        return messageList[Math.floor(Math.random() * messageList.length)];
      };

      const profileImage=[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/men/8.jpg",
        "https://randomuser.me/api/portraits/women/9.jpg",
        "https://randomuser.me/api/portraits/men/10.jpg",
        "https://randomuser.me/api/portraits/women/11.jpg",
        "https://randomuser.me/api/portraits/men/12.jpg",
        "https://randomuser.me/api/portraits/women/13.jpg",
        "https://randomuser.me/api/portraits/men/14.jpg",
        "https://randomuser.me/api/portraits/women/15.jpg",
        "https://randomuser.me/api/portraits/men/16.jpg",
        "https://randomuser.me/api/portraits/women/17.jpg",
        "https://randomuser.me/api/portraits/men/18.jpg",
        "https://randomuser.me/api/portraits/women/19.jpg",
        "https://randomuser.me/api/portraits/men/20.jpg",
        "https://randomuser.me/api/portraits/women/21.jpg",
        "https://randomuser.me/api/portraits/men/22.jpg",
        "https://randomuser.me/api/portraits/women/23.jpg",
        "https://randomuser.me/api/portraits/men/24.jpg",
        "https://randomuser.me/api/portraits/women/25.jpg",
        "https://randomuser.me/api/portraits/men/26.jpg",
        "https://randomuser.me/api/portraits/women/27.jpg",
        "https://randomuser.me/api/portraits/men/28.jpg",
        "https://randomuser.me/api/portraits/women/29.jpg",
        "https://randomuser.me/api/portraits/men/30.jpg",
        "https://randomuser.me/api/portraits/women/31.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/33.jpg",
        "https://randomuser.me/api/portraits/men/34.jpg",
        "https://randomuser.me/api/portraits/women/35.jpg",
        "https://randomuser.me/api/portraits/men/36.jpg",
        "https://randomuser.me/api/portraits/women/37.jpg",
        "https://randomuser.me/api/portraits/men/38.jpg",
        "https://randomuser.me/api/portraits/women/39.jpg",
        "https://randomuser.me/api/portraits/men/40.jpg",
        "https://randomuser.me/api/portraits/women/41.jpg",
        "https://randomuser.me/api/portraits/men/42.jpg",
        "https://randomuser.me/api/portraits/women/43.jpg",
        "https://randomuser.me/api/portraits/men/44.jpg",
        "https://randomuser.me/api/portraits/women/45.jpg",
        "https://randomuser.me/api/portraits/men/46.jpg",
        "https://randomuser.me/api/portraits/women/47.jpg",
    ]
    export function generateProfileImage(){
        return profileImage[Math.floor(Math.random()*profileImage.length)];
    }

 

  