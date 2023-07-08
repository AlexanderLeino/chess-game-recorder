import React, {useState } from 'react'
import {FaChessPawn, FaChessBishop, FaChessRook, FaChessKnight , FaChessKing, FaChessQueen} from 'react-icons/fa'

export const ScoreCard = () => {
    const [score, setScore] = useState([])
    const [move, setMove] = useState({piece: "", column: "", row: "", exchange: false,  })
    const [moveSubmitted, setMoveSubmitted] = useState(false)

    // here is where the move will be officially created after submitted
    const createMove = (e) => {
        

        

    }

    const buildMove = (e) => {
        console.log(e.target.id)
        if(e.target.id === 'column' || e.target.id === 'row'){
            setMove({...move, [e.target.id]: e.target.value})
        }
        setMove({...move, [e.currentTarget.id]: e.currentTarget.value})
    }


  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='flex flex-col justify-center content-center w-fit'>
            <div className='text-lime-50 text-2xl mt-3 text-center'>Piece</div>
            <div className=' grid grid-cols-3 gap-10 place-items-center mt-4'>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={'P'} onClick={(e) => buildMove(e)}><FaChessPawn className='text-7xl text-lime-200 w-full'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={'B'} onClick={(e) => buildMove(e)}><FaChessBishop className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={'R'} onClick={(e) => buildMove(e)}><FaChessRook className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={'N'} onClick={(e) => buildMove(e)}><FaChessKnight className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={'K'} onClick={(e) => buildMove(e)}><FaChessKing className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2' id='piece' value={"Q"} onClick={(e) => buildMove(e)}><FaChessQueen className='text-7xl text-lime-200'/></button>
            </div>
        </div>
    <div className='text-lime-50 text-2xl mt-3 text-center'>
        Column
    </div>
    <div className='grid grid-cols-4 gap-10 mt-4 w-fit'>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center' id='column' value={'a'} onClick={(e) => buildMove(e)}>A</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center' id='column' value='b' onClick={(e) => buildMove(e)}>B</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='c' onClick={(e) => buildMove(e)}>C</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='d' onClick={(e) => buildMove(e)}>D</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='e' onClick={(e) => buildMove(e)}>E</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='f' onClick={(e) => buildMove(e)}>F</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='g' onClick={(e) => buildMove(e)}>G</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='column' value='h' onClick={(e) => buildMove(e)}>H</button>
    </div>
    <div className='text-lime-50 text-2xl mt-3 text-center'>
        Row
    </div>
    <div className='grid grid-cols-4 gap-10 mt-4 w-fit'>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center' id='row' value='1' onClick={(e) => buildMove(e)}>1</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center' id='row' value='2' onClick={(e) => buildMove(e)}>2</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='3' onClick={(e) => buildMove(e)}>3</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='4' onClick={(e) => buildMove(e)}>4</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='5' onClick={(e) => buildMove(e)}>5</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='6' onClick={(e) => buildMove(e)}>6</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='7' onClick={(e) => buildMove(e)}>7</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl' id='row' value='8' onClick={(e) => buildMove(e)}>8</button>

    </div>
    </div>
    
  )
}
