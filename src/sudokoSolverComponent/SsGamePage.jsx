import React, { useState, useEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const SsGamePage = () => {
    
      const initialBoard = [
    [
       [{val:5,fixed:true},{val:3,fixed:true},{val:0,fixed:false}, {val:0,fixed:false}, {val:7,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:6,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:1,fixed:true}, {val:9,fixed:true}, {val:5,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:9,fixed:true}, {val:8,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:6,fixed:true}, {val:0,fixed:false}],

       [{val:8,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:6,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:3,fixed:true}],

       [{val:4,fixed:true}, {val:0,fixed:false},  {val:0,fixed:false}, {val:8,fixed:true}, {val:0,fixed:false}, {val:3,fixed:true},  {val:0,fixed:false}, {val:0,fixed:false}, {val:1,fixed:true}],

       [{val:7,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:2,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false},{val:0,fixed:false} , {val:6,fixed:true}],
       
       [{val:0,fixed:false}, {val:6,fixed:true}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:2,fixed:true}, {val:8,fixed:true}, {val:0,fixed:false}],
       
       [ {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:4,fixed:true}, {val:1,fixed:true}, {val:9,fixed:true},  {val:0,fixed:false}, {val:0,fixed:false}, {val:5,fixed:true}],

       [ {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:8,fixed:true}, {val:0,fixed:false},  {val:0,fixed:false}, {val:7,fixed:true}, {val:9,fixed:true}],
    ],
    [
       [{val:0,fixed:false},{val:3,fixed:true},{val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:4,fixed:true}, {val:0,fixed:false}],

       [{val:5,fixed:true}, {val:4,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:7,fixed:true}, {val:1,fixed:true}, {val:0,fixed:false}, {val:2,fixed:true}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:3,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:6,fixed:true}],

       [{val:0,fixed:false}, {val:0,fixed:false}, {val:8,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:9,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:3,fixed:true}, {val:0,fixed:false},  {val:2,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:1,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:7,fixed:true}, {val:0,fixed:false},{val:0,fixed:false} , {val:3,fixed:true}],
       
       [{val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:8,fixed:true}, {val:9,fixed:true}],
       
       [{val:7,fixed:true}, {val:8,fixed:true}, {val:5,fixed:true}, {val:9,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:5,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:6,fixed:true}, {val:2,fixed:true}],
    ],
    [
       [{val:2,fixed:true},{val:0,fixed:false},{val:3,fixed:true}, {val:0,fixed:false}, {val:4,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:1,fixed:true}],

       [{val:0,fixed:false}, {val:0,fixed:false}, {val:7,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:0,fixed:false}, {val:1,fixed:true}, {val:9,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:8,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}],

       [{val:4,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:2,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:3,fixed:true}],

       [{val:0,fixed:false}, {val:0,fixed:false},  {val:2,fixed:true}, {val:0,fixed:false}, {val:3,fixed:true}, {val:0,fixed:false},  {val:0,fixed:false}, {val:6,fixed:true}, {val:0,fixed:false}],

       [{val:0,fixed:false}, {val:1,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false},{val:0,fixed:false} , {val:5,fixed:true}],
       
       [{val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false},  {val:4,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:1,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}],
       
       [ {val:9,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:6,fixed:true}],

       [ {val:0,fixed:false},  {val:5,fixed:true}, {val:0,fixed:false}, {val:6,fixed:true}, {val:0,fixed:false}, {val:0,fixed:false},  {val:0,fixed:false}, {val:0,fixed:false}, {val:0,fixed:false}],
    ],

    ];
    const [board,setBoard] = useState(initialBoard);
    const [focusedCell, setFocusedCell] = useState({row:null, col:null});
    const [rand, setRand] = useState((Math.floor(Math.random() * initialBoard.length)));
    const isFirstRender = useRef(true);
    const currentBoard = board[rand];
    
    useEffect(() => {

      if(isFirstRender.current){
        isFirstRender.current = false; 
        return;
      }
      else{
        toast.success("board changed");
        setFocusedCell({row:null, col:null});
      }
    }, [rand]);

    function handleChangeClick(x){
      let oldX = x;
      let newX;
      do{
        newX = Math.floor(Math.random()*board.length);
      }while(oldX === newX);
      console.log(newX,oldX);
      setRand(newX);
    }
    function isSafe(val,row,col){
         for(let j = 0; j < 9; j++){
            if(j != col && currentBoard[row][j].val === Number(val)){
                toast.error("Already exist in a row")
                return false;
            }
         }
         for(let i = 0; i < 9; i++){
            if(i != row && currentBoard[i][col].val === Number(val)){
                toast.error("Already exist in a column")
                return false;
            }

         }
         const startRow = Math.floor(row/3)*3;
         const startCol = Math.floor(col/3)*3;
         
         for(let i = 0;i < 3; i++){
            for(let j = 0; j < 3; j++){
                const checkRow = startRow + i;
                const checkCol = startCol + j;
                if (checkRow === row && checkCol === col) continue; 
                if(currentBoard[checkRow][checkCol].val === Number(val)){
                    toast.error("Already exist in a grid")
                    
                    return false;
                }
            }
         }
         return true;
    }
    function handleChange(e, row, col) {
    const val = e.target.value;
    console.log("Value: ",val);
    const cell = currentBoard[row][col];

    if (cell.fixed) return; 
    if (/^[1-9]$/.test(val)) {
        if (!isSafe(val, row, col)) return; 

        setBoard(prevBoard => {
            // Deep copy
            const newCurrentBoard = prevBoard[rand].map(r => r.map(c => ({ ...c })));
            newCurrentBoard[row][col].val = Number(val);
            const updatedBoards = [...prevBoard]; 
            updatedBoards[rand] = newCurrentBoard; 
            return updatedBoards;
        });
    } else if (val === "") { 
        setBoard(prevBoard => {
            const newCurrentBoard = prevBoard[rand].map(r => r.map(c => ({ ...c })));
            newCurrentBoard[row][col].val = 0; 
            const updatedBoards = [...prevBoard];
            updatedBoards[rand] = newCurrentBoard;
            return updatedBoards;
        });
    }
}
    function handleCellBtn(row,col){
      if(row === null || col === null || currentBoard[focusedCell.row][focusedCell.col].val === 0){
        toast.warn("Cell cannot be empty");
        return;
      }
        if (!isSafe(currentBoard[row][col].val, row, col)) {
        toast.error("Cannot save: current value is invalid!");
        return;
    }
        setBoard(prevBoard => {
        const updatedBoards = [...prevBoard];
        const newCurrentBoard = updatedBoards[rand].map(r => r.map(c => ({ ...c })));
        newCurrentBoard[row][col] = { ...newCurrentBoard[row][col], fixed: true };
        updatedBoards[rand] = newCurrentBoard;
        return updatedBoards;
    });
    toast.success(`Cell (${row + 1}, ${col + 1}) saved!`);
    }
    function handleSaveClick(row,col){
      for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
          if(!currentBoard[i][j].fixed){
            toast.warn("Complete the Board to save");
            return;
          }
        }
      }
      toast.success("Congrats You have completed the Board");
    }
  
    
  return (
    <div className='flex flex-col justify-center items-center bg-[url("./ss.webp")] bg-cover bg-center w-full h-screen'>
      <h1 className='text-3xl text-amber-50 font-mono'>Welcome to Sudoko game Page</h1>
      <p className='text-2xl text-blue-300'>Board: {rand+1}/{initialBoard.length}</p>
      {/* sudoku board banana hai */}
     <div className='grid grid-cols-9 grid-rows-9 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] p-4 mt-10'>
       {currentBoard.map((row ,rowIndex) => {
           return row.map((num,colIndex) => {


             const startRow = Math.floor(focusedCell.row / 3) * 3;
             const startCol = Math.floor(focusedCell.col / 3) * 3;

             const isInHighlightedBox =
              focusedCell.row !== null &&
              focusedCell.col !== null &&
              rowIndex >= startRow && rowIndex < startRow + 3 &&
              colIndex >= startCol && colIndex < startCol + 3;
            return (
            <div key={`${rowIndex}-${colIndex}`}
           className={`flex justify-center items-center text-center border-2 rounded-[5px] sm:rounded-[10px] md:rounded-[10px] lg:rounded-[10px] ${
                  isInHighlightedBox ? 'border-slate-400 bg-slate-50' : 'border-slate-600 bg-transparent'}
                  ${isInHighlightedBox ? 'shadow-md shadow-slate-400' : 'shadow-sm'}`} >
                {num.fixed === false ? 
                (
                <input 
                 type='text'
                 value={num.val === 0 ? '' : num.val}
                 onFocus={() => setFocusedCell({ row: rowIndex, col: colIndex })}
                 onChange={(e) => handleChange(e,rowIndex,colIndex)}
                 className="w-full h-full text-center outline-none text-[26px] text-red-600
                 focus:bg-slate-100 focus:border-1 focus:shadow-inner rounded-[10px] focus:border-slate-400 focus:text-black" maxLength={1}/> 
                )
                : 
                  <h3 className='text-[26px] bg-amber-50 text-black font-bold w-full h-full rounded-[10px]'>{num.val}</h3>
               }
            </div> 
            );
           });
      })
   
       }
     </div>
      
     <div className='w-[500px] flex flex-col sm:flex-row justify-around items-center gap-2'>
     <button className='border-1 w-[150px] sm:w-auto border-slate-500 rounded-2xl p-3 bg-slate-300 cursor-pointer hover:bg-slate-500 hover:text-amber-50 transition duration-300' onClick={()=>handleCellBtn(focusedCell.row, focusedCell.col)}>SAVE CELL</button>
     <button onClick={() => handleChangeClick(rand)} className='border-1 w-[150px] sm:w-auto border-slate-500 rounded-2xl p-3 bg-slate-300  hover:bg-slate-500 hover:text-amber-50 transition duration-300cursor-pointer'>CHANGE BOARD</button>
     <button className='border-1 border-slate-500 w-[150px] sm:w-auto rounded-2xl p-3 bg-slate-300 cursor-pointer  hover:bg-slate-500 hover:text-amber-50 transition duration-300' onClick={handleSaveClick}>SAVE BAORD</button>

     </div>
    </div>
  )
}

export default SsGamePage
