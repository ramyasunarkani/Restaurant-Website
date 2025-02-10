import style from './MealsAvailable.module.css';
import MealsItem from './MealItem/MealsItem';
import Card from '../UI/Card';
const MealsAvailable=()=>{
    const mealsList=[
        {id:'m1',name:'Sushi',description:'Finest Fish and Vegies',price:22.99},
        {id:'m2',name:'Schnitzel',description:'German Speciality',price:16.5},
        {id:'m3',name:'Barbecue Burger',description:'American,raw,meaty',price:12.99},
        {id:'m4',name:'Green Bowl',description:'Healty...and green...',price:18.99}
    ]
    return(
        <section className={style.meals}>
            <Card>
                <ul>
                {mealsList.map(meal=><MealsItem 
                key={meal.id} 
                name={meal.name} 
                description={meal.description} 
                price={meal.price}/>)}
                </ul>

            </Card>
        </section>
    );

}
export default MealsAvailable;