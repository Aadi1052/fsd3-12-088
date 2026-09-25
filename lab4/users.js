//users.js

// we use in memory database
let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

export const getUsers = () => users;
export const getallusers = () => {
  return user;
}

export const getuserbyid = (pid) =>{
 const found= users.find((user)=> user.id ===pid)
return found;
}

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};
 export const updateuser = (pid, updateuser)=>{
  const index = user.findindex((user)=> user.id===pid);
  if(index == -1){
    return false;
  }
  updatedata.id =pid;
  ser[index]= updatedata;
  return updatedata;
 }
 export const deleteuser = (pid)=>{
  const index = user.findindex((user)=> user,id ===pid);
  if(index == -1){
    return false;
  }
  user.splice(index,1);
 }