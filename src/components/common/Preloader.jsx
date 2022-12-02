import scss from './Preloader.module.scss';

const Preloader = (props) => {
   return (
       <img className={scss.preloader} src={'/demo-app/preloader.svg'} alt={'preloader'}/>
   );
}

export default Preloader;


