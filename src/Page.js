import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const Page = () => {
    const params = useParams()
    const [showMore, setShowMore] = useState(false)
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
            .then(({data}) => {
                console.log(data)
                setDishes(data)
            }).finally(() => {
            setLoading(false)
        })
    }, [params.name])
    return (

        <div className={'container'}>
            {loading ? <h2> loading...</h2> :
                <div>
                    <Link style={{
                        backgroundColor: "#4CAF50",
                        padding: "10px 15px",
                        borderRadius: "40px",
                        marginTop: "40px"
                    }} to='/'>
                        GO BACK
                    </Link>


                    <div className={'pageingrid'}>
                        <img style={{borderRadius: 30}} src={dishes?.meals[0]?.strMealThumb} alt=""/> <h4
                        className={'texthead'}>{dishes.meals[0].strInstructions}</h4>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <h3 style={{fontFamily: "inter"}}>Name: {dishes.meals[0].strMeal}</h3>
                        <h3 style={{fontFamily: "inter"}}>Country: {dishes.meals[0].strArea}</h3>
                        <h3 style={{fontFamily: "inter"}}>Category: {dishes.meals[0].strCategory}</h3>
                    </div>


                    <h2 className={'textingrid'}>Ingridients</h2>
                    <div style={{justifyContent: "space-around"}}>
                        <ul type={'circle'}>
                            {
                                dishes.meals[0].strIngredient1 &&
                                <li>
                                    {dishes.meals[0].strIngredient1}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient1}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient2 &&
                                <li>{dishes.meals[0].strIngredient2}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient2}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient3 &&
                                <li>{dishes.meals[0].strIngredient3}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient3}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient4 &&
                                <li>{dishes.meals[0].strIngredient4}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient4}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient5 &&
                                <li>{dishes.meals[0].strIngredient5}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient5}.png`}/>
                                </li>
                            }
                        </ul>
                        {showMore ? <ul type={'circle'}>
                            {
                                dishes.meals[0].strIngredient6 &&
                                <li>{dishes.meals[0].strIngredient6}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient6}.png`}/>
                                </li>
                            }
                            {

                                dishes.meals[0].strIngredient7 &&
                                <li>{dishes.meals[0].strIngredient7}

                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient7}.png`}/>

                                </li>

                            }
                            {
                                dishes.meals[0].strIngredient8 &&
                                <li>{dishes.meals[0].strIngredient8}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient8}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient9 &&
                                <li>{dishes.meals[0].strIngredient9}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient9}.png`}/>
                                </li>
                            }
                            {
                                dishes.meals[0].strIngredient10 &&
                                <li>{dishes.meals[0].strIngredient10}
                                    <img className={'imgingrid'}  src={`https://www.themealdb.com/images/ingredients/${dishes.meals[0].strIngredient10}.png`}/>
                                </li>
                            }


                        </ul> : null}
                        <button onClick={() => setShowMore(!showMore)}
                                style={{backgroundColor: "#4CAF50", borderRadius: "40px", color: "white",padding:"15px 20px"}}>
                            {showMore ? 'hide' : 'show more'}
                        </button>


                    </div>


                </div>

            }
        </div>
    )
}
export default Page