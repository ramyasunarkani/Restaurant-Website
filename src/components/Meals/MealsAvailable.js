import style from './MealsAvailable.module.css';

const MealsAvailable=()=>{
    const mealsList=[{},
        {id:'m1',name:'Sushi',description:'Finest Fish and Vegies',price:22.99},
        {id:'m2',name:'Schnitzel',description:'German Speciality',price:16.5},
        {id:'m3',name:'Barbecue Burger',description:'American,raw,meaty',price:12.99},
        {id:'m4',name:'Green Bowl',description:'Healty...and green...',price:18.99}
    ]
    return(
        <section>
            <ul className={style.ul}>

            </ul>
        </section>
    );

}
export default MealsAvailable;