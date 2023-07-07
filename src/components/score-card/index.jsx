import React from 'react'
import {FaChessPawn, FaChessBishop, FaChessRook, FaChessKnight , FaChessKing, FaChessQueen} from 'react-icons/fa'

export const ScoreCard = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='flex flex-col justify-center content-center w-fit'>
            <div className='text-lime-50 text-2xl mt-3 text-center'>Piece</div>
            <div className=' grid grid-cols-3 gap-10 place-items-center mt-4'>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessPawn className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessBishop className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessRook className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessKnight className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessKing className='text-7xl text-lime-200'/></button>
                <button className='w-fit border-2 rounded-lg border-lime-100 p-2'><FaChessQueen className='text-7xl text-lime-200'/></button>
            </div>
        </div>
    <div className='text-lime-50 text-2xl mt-3 text-center'>
        Column
    </div>
    <div className='grid grid-cols-4 gap-10 mt-4 w-fit'>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center'>A</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center'>B</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>C</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>D</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>E</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>F</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>G</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>H</button>
    </div>
    <div className='text-lime-50 text-2xl mt-3 text-center'>
        Row
    </div>
    <div className='grid grid-cols-4 gap-10 mt-4 w-fit'>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center'>1</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl text-center'>2</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>3</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>4</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>5</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>6</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>7</button>
        <button className='w-fit border-2 rounded-lg border-lime-100 p-2 text-lime-200 text-5xl'>8</button>

    </div>
    </div>
    
  )
}
