import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@hoc/Layout/Layout';
import { Converter } from '@src/pages/Converter/Converter';
import { Quiz } from '@src/pages/Quiz/Quiz';
import { QUIZ } from '@constants/quiz';
import { Photo } from '@src/pages/Photo/Photo';
import { AppWrapper } from './style';
import { MainPage } from '../pages/MainPage/MainPage';

function App() {
	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/converter' element={<Converter/>}/>
					<Route path='/quiz' element={<Quiz quizItem={QUIZ}/>}/>
					<Route path='/photo' element={<Photo/>}/>
				</Route>
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable={false}
				theme='colored'
			/>
		</AppWrapper>
	);
}

export default App;
