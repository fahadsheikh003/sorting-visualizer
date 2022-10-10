import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink className="navbar-brand" to={'/'}>Sorting Visualizer</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav flex-wrap justify-content-center"> 
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/bubble-sort'}>Bubble Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/selection-sort'}>Selection Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/insertion-sort'}>Insertion Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/merge-sort'}>Merge Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/quick-sort'}>Quick Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/heap-sort'}>Heap Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/radix-sort'}>Radix Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/bucket-sort'}>Bucket Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/count-sort'}>Count Sort</NavLink>
                        <NavLink className={`nav-item nav-link text-center ${({ isActive }) => isActive? "active": ''}`} to={'/comparison'}>Comparison</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}
