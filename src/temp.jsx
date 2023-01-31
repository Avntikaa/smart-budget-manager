import React,{useContext,useState,createContext,useEffect} from "react";

const Context=createContext();

 export const StateContext = ({children}) => {
const getLocalitem=()=>{
    let list=localStorage.getItem('lists');
if(list)
{
  return JSON.parse(localStorage.getItem('lists'));
}
else{
  return [{Amount:"50",Category:"cvd",text:"dcad"}];
}
  }

  const getLocalIncome=()=>{
     let income=localStorage.getItem('income');
if(income){
  return localStorage.getItem('income');
}
else{
  return 0;
}
  }


  const getLocalExpense=()=>{
    let expense=localStorage.getItem('expense');
if(expense){
  return localStorage.getItem('expense');
}
else{
  return 0;
}
  }
 
  const getLocalOverall=()=>{
     let overall=localStorage.getItem('overall');
if(overall){
  return localStorage.getItem('income-expense');
}
else{
  return income-expense;
}

  }

   const [showLogin, setShowLogin] = useState(false);
    const [showExpense,setShowExpense]=useState(false);
const handleClick=()=>{
setShowLogin(true);
setShowExpense(false);
}



const handleExp=()=>{
  setShowExpense(true);
  setShowLogin(false);
}
      const [input,setInput]=useState('');
      const[text,setText]=useState();
    //to get everytime the data which is saved we call getlocalitem which fetch and return 
   const [item,setItem]=useState(getLocalitem);
   const[category,setCategory]=useState('');
let [choose,setChoose]=useState(getLocalitem);
const [income,setIncome]=useState(getLocalIncome);
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
const[expense,setExpense]=useState(getLocalExpense);
const[overall,setOverall]=useState(getLocalOverall);
const[extra,setExtra]=useState(0);
const handleIncome=()=>{
setIncome(income);
 if(parseInt(income)>parseInt(expense))
      {
                setExtra(0);
        setOverall(income-expense);

      }
else      {
        setExtra(expense-income);
        setOverall(0);
      }
      setShowLogin(true);
}
    const handleSubmit=()=>{
     setItem([...item,{input,category,text}]);
          setChoose([...item,{input,category,text}]);
const total=parseInt(expense)+parseInt(input);
setExpense(total);
setOverall(income-expense);
     setInput('');
     setText('');
     setCategory('');
    
    
    }
const [isOpen,setIsOpen] = useState(false) ;

    const OpenExpense=()=>{
   setIsOpen(true);

    }
    useEffect(()=>{
      income>expense?setOverall(income-expense):setOverall(0);
      expense>income?setExtra(expense-income):setExtra(0);
    },[income,expense,extra,overall]);

     useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(item))
// localStorage.setItem('income',income)
// localStorage.setItem('expense',expense)
// localStorage.setItem('overall',overall)
    },[item]);


    //Reaminder page
    
    const [rinput,setRinput]=useState('');
    const[rtext,setRtext]=useState('');
   let [todo,settodo]=useState([]);
   const[rcategory,setRcategory]=useState('');

    const handleRemainder=()=>{
     settodo([...todo,{rinput,rcategory,rtext}]);
     setRinput('');
     setRtext('');
     setRcategory('');
    }

    const handleDelete=(index)=>{
     const newL=item.filter((e,ind)=>ind!==index)
      setItem(newL);
 setChoose(item);
    }

    // useEffect(()=>{
    //   console.log('lijlkj');
    // },[input]);
    
// const handleDatas=async ()=>{
//   await setItem([...item,{input,category,text}]);
// await setChoose([...item,{input,category,text}]);
// }

     const handleDone=(index)=>{
    console.log("hello");
   }

function filterCategory(val){
   const choose=item.filter((e)=>e.category.includes(val));
   setChoose(choose);
}
  
  
  return (
    <Context.Provider
    value={{
      input,
      setInput,
      item,
      setItem,
      handleSubmit,
      handleRemainder,
      todo,
      rinput,
      setRinput,
      handleDone,
      rcategory,
      setRcategory,
      category,
      setCategory,
      choose,
      setChoose,
      filterCategory,
      income,
      setIncome,
      handleIncome,
      expense,
      overall,
      extra,
      isOpen,
      OpenExpense,
      text,
      setText,
      rtext,
      setRtext,
      handleDelete,
      showLogin,
      setShowLogin,
      showExpense,
      setShowExpense,
      handleClick,
      handleExp,
      setIsOpen
    }}>
{children}
    </Context.Provider>
  )
}

    export const useStateContext = () => useContext(Context);
