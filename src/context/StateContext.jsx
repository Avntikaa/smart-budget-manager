import React, { useContext, useState, createContext, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
const Context = createContext();
export const StateContext = ({ children }) => {
    const toast = useToast();


  // eslint-disable-next-line no-unused-vars
  const getLocalitem = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else {
      return [{ Amount: "50", Category: "cvd", text: "dcad" }];
    }
  }

  const getLocaltodo=()=>{
    let todo=localStorage.getItem('notes');
    if(todo){
      return JSON.parse(localStorage.getItem('notes'));
    }
    else {
      return [{  Category: "cvd", text: "dcad" }];
    }
  }

   
  const getLocalExpense = () => {
    let money = localStorage.getItem('expense');
    if (money) {
      return localStorage.getItem('expense');
    }
    else {
      return 0;
    }
  }

  const getLocalIncome = () => {
    let usd = localStorage.getItem('incomes');
    if (usd) {
      return localStorage.getItem('incomes');
    }
    else {
      return 0;
    }
  }

   const getLocalOverall=()=>{
     let overall=localStorage.getItem('overall');
if(overall){
  return localStorage.getItem(overall);
}
else{
  return income-expense;
}
   }

  const [input, setInput] = useState('');
  const [text, setText] = useState('');
  //to get everytime the data which is saved we call getlocalitem which fetch and return 
  const [items, setItems] = useState(getLocalitem);
  const [category, setCategory] = useState('');
  const [choose, setChoose] = useState(getLocalitem);
  const [showLogin, setShowLogin] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [expense, setExpense] = useState(getLocalExpense);
  const [income, setIncome] = useState(getLocalIncome);
  const[overall,setOverall]=useState(getLocalOverall);
  const[extra,setExtra]=useState(0);
  const [rinput,setRinput]=useState('');
  const[rtext,setRtext]=useState('');
  const[todo,setTodo]=useState(getLocaltodo);
  const[rcategory,setRcategory]=useState('');
  const [isOpen,setIsOpen] = useState(false) ;
  const[alert,setAlert]=useState(true);
      const [isOpens,setIsOpens]=useState(false);
const [deleteitem,setDeleteitem]=useState(false);
const[indexes,setIndexes]=useState();
const [openRemDelete,setOpenRemDelete]=useState(false);
const[remind,setRemind]=useState();
const [showNotes,setShowNotes]=useState(true);
const [showform,setShowform]=useState(false);
const [showButton,setShowButton]=useState(true);
const[ind,setInd]=useState();
  // eslint-disable-next-line no-unused-vars
  const handleClick = () => {
    setShowLogin(true);
    setShowExpense(false);
  }
  const handleExp = () => {
    setShowExpense(true);
    setShowLogin(false);
  }

  const DisplayNoteForm=()=>{
        setShowButton(false);
    setShowform(true);
    setShowNotes(false);
  }

  const MainPage=()=>{
    setShowform(false);
    setShowButton(true);
    setShowNotes(true);  
  }
  const handleSubmit = () => {
    if (parseInt(income) === 0) {
      alert("add income");
    }
    if(input===''){
       toast({
          title: 'Missing Values',
          status: 'error',
          duration: 2000,
          isClosable: true,
           width: '1000px',
      maxWidth: '100%',
      height:'120px',
          position: 'top',
        })
    }
    else {
      toast({
          title: 'Item Successfully added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })   
      setItems([...items, { input, category, text }]);
      setChoose([...items,{ input, category, text }]);
      let total = parseInt(expense) + parseInt(input);
      setExpense(total);
      setInput('');
      setText('');
      setCategory('');
    }
  }

  const handleIncome = () => {
    toast({
          title: 'Income Successfully added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })  
    setIncome(income);
    setOverall(income-expense);
  }

  const DeleteNotes=(index)=>{
setOpenRemDelete(true);
setRemind(index);
   
  }
  const deleteeachnote=()=>{
    setOpenRemDelete(false);
     let newNotes = todo.filter((e, ind) => ind !== remind)
setTodo(newNotes);
  }
const OpenAlert=()=>{
  setAlert(true);
}


  const handleDelete = (index) => {
    setIsOpens(true);
    setInd(index);
    }
  
const deleteeachitem=()=>{
setDeleteitem(true);
   let newL = choose.filter((e, index) => index !== ind)
    setItems(newL);
    setChoose(newL);
    let value1 = choose[ind].input;
    setExpense(expense - parseInt(value1));
    setOverall(income-expense);
    setIsOpens(false);
}
  const handleRemainder=()=>{
    if(rtext===''){
      console.log("nkjn");
      toast({
          title: 'Missing Values',
          status: 'error',
          duration: 2000,
          isClosable: true,
           width: '1000px',
      maxWidth: '100%',
      height:'120px',
          position: 'top',
        })
    }
    else{
       toast({
          title: 'Remainder set',
          status: 'success',
          duration: 2000,
          isClosable: true,
           width: '1000px',
      maxWidth: '100%',
      height:'120px',
          position: 'Bottom',
        })
     setTodo([...todo,{rcategory,rtext}]);
     setRtext('');
     setRcategory('');
     setShowform(false);
     setShowNotes(true);
     setShowButton(true);
    }
 
    }


const handleDone=(index)=>{
setIsOpen(true);
setIndexes(index);
}

const addamount=(index)=>{
  setIsOpen(false);
let object={
  input:rinput,
    category:todo[index].rcategory,
  text:todo[index].rtext
}
setChoose([...choose,object]);
setItems([...items,object]);
 let total = parseInt(expense) + parseInt(rinput);
      setExpense(total);
let newT = todo.filter((e, ind) => ind !== index)
setTodo(newT);
setRinput('');
}
  const filterCategory=(val)=>{
   const choose=items.filter((e)=>e.category.includes(val));
   setChoose(choose);
   setIsOpen(false);
}
  

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
    localStorage.setItem('expense', expense)
        localStorage.setItem('incomes', income)
       localStorage.setItem('notes',JSON.stringify(todo))


  }, [items, expense,income,overall,todo]);



useEffect(()=>{
  if(income>=expense)
  {setOverall(income-expense);
    setExtra(0)}
  if(expense>income)
  {setExtra(expense-income);
    setOverall(0);}
},[overall,income,expense])

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        category,
        setCategory,
        text,
        setText,
        items,
        setItems,
        handleSubmit,
        choose,
        showLogin,
        showExpense,
        handleClick,
        handleExp,
        expense,
        handleDelete,
        getLocalExpense,
        income,
        setIncome,
        handleIncome,
        overall,
        extra,
        filterCategory,
        rinput,setRinput,todo,setRcategory,rcategory,rtext,setRtext,
        handleRemainder,handleDone,isOpen,addamount,deleteeachitem,DeleteNotes,
        OpenAlert,alert,isOpens,setIsOpens,deleteitem,setDeleteitem,
        openRemDelete,
        remind,
        deleteeachnote,
        setOpenRemDelete,
        showform,
        showNotes,
        DisplayNoteForm,
        showButton,
        MainPage,
        indexes
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);

