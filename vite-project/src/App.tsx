


import { Routes, Route } from 'react-router-dom';
import Apple from './sub/Header/Apple.tsx';
import Content from './sub/Header/Content';
import UnitedStates from './sub/Header/UnitedStates.tsx';
import Wallstreet from './sub/Header/Wallstreet.tsx';
import Technology from './sub/Header/technology.tsx';
import Business from './sub/Header/Business.tsx';


export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/Apple" element={<Apple />} />
                <Route path="/business" element={<Business />} />
                <Route path="/us" element={<UnitedStates />} />
                <Route path="/wsj" element={<Wallstreet />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </>
    );

}