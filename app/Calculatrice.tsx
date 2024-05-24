

import { useState } from 'react'; // Add the missing import statement


function Calculatrice() {
  var [expression , setExpression] = useState('')
  var [result , setResult] = useState('0') 
  var numbers =[] 
  var symbols = ['<-','AC','+','-','*','/','.','0','=']
  var x 

  for (var i= 1; i<=9; i++) numbers.push(i);
  
  return <div className='bg-gray-700 md:w-[500px] md:h-[700px] w-[320px] h-[500px] grid grid-cols-5 grid-rows-7 gap-4 rounded-lg p-6'>
    <div className='col-span-5 row-span-3 h-[84%] w-full bg-slate-200 rounded-sm mx-auto px-5 pt-8 my-auto'>
      <div className='w-full h-[52%] md:text-5xl text-3xl' >{expression}</div>
      <div className='w-full h-full border-t-2 border-t-gray-700 text-end md:text-5xl text-3xl sm:pt-5 pt-2'>{result}</div>
    </div>
    <div className='col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-4 '>{
      numbers.map((number)=>{
        return <button className='bg-gray-400 w-full h-full row-span-1 col-span-1 rounded-sm text-2xl' onClick={()=>{setExpression(expression+number)}}>{number}</button>
      })
    }
    </div>
    {
          symbols.map((item)=>{
            return <button className={`text-2xl bg-gray-400 w-full h-full row-span-1  rounded-sm 
            ${item === 'AC' ? 'bg-red-400' : ''}
            ${item === '<-' ? 'bg bg-yellow-500' : ''}
            ${item === '=' || item == '.' ? 'col-span-2' : 'col-span-1'}
            ${item !== '=' && item!=='AC' && item!=='.' && item!=='0' && item!=='<-'? 'bg bg-indigo-100' : ''}

            ${item === '=' ? 'bg-green-600 col-span-2' : ''}
            `}  onClick={()=>{
              
              if (item === 'AC') {
                setExpression('')
                setResult ('0');
              }else if (item === '<-'){
                  setExpression(expression.slice(0,-1))
              }else if (item === '='){
                try {
                  x = eval(expression)
                  
                  if(x % 1 !== 0) x = x.toFixed(2);
                  setResult(x)
                }catch (e){
                  setResult('Error')
                }
              }else setExpression(expression+item)
            }}>{item}</button>
          })
    }
      
    
      <div></div>
    

  </div>
}

export default Calculatrice;

// git remote add origin https://github.com/Karim-Zaf/Calculatrice.git