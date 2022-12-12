import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseTable from './CourseTable';
import SearchBar from './SearchBar';
import Four0FourComponent from './Four0FourComponent';
import ErrorComponent from './ErrorComponent';
import Course from './Course';

const coursesUrl = `http://localhost:4000/courses`;

const FilterableCoursesTable = () => {

    const [searchText, setSearchText] = useState(``);
    const [advanced, setAdvanced] = useState(false);
    const [courses, setCourses] = useState([]);
    const [errors, setErrors] = useState(null);

    const handleNetworkError = error => {
        setErrors(<ErrorComponent message={error.message} />);
    }

    const getCourses = useCallback(
        async () => {
            let response;

            try {
                response = await fetch(coursesUrl);
            } catch (error) {
                return handleNetworkError(error);
            }

            if (response.status === 200) {
                const returnedCourses = await response.json();
                returnedCourses.length ? setCourses(returnedCourses) : setCourses([returnedCourses]);
            }
            if (response.status === 404) {
                setErrors(<Four0FourComponent />);
                setCourses([]);
            }
            if (response.status > 499 && response.status < 600) {
                setErrors(<ErrorComponent error={response.status} message={response.message} />);
                setCourses([]);
            }
        },
        [],
    );

    useEffect(() => {
        setTimeout(() => {
            getCourses();
        }, 3000);
    }, [getCourses]);

    const handleChange = event => {
        if (event.target.type === `search`) {
            setSearchText(event.target.value);
        }

        if (event.target.type === `checkbox`) {
            setAdvanced(event.target.checked);
        }
    }

    // OLD VERSION OF FilterableCoursesTable - using local State

    return (
        <>
            <div id="table-wrapper">
                <SearchBar
                    searchText={searchText}
                    advanced={advanced}
                    handleChange={handleChange}
                />
                {errors && errors}
                {Array.isArray(courses) && courses.length > 0 &&
                    <CourseTable
                        courses={courses}
                        searchText={searchText}
                        advanced={advanced}
                    />
                }
                {!errors && courses.length === 0 && <h4>Course Data is Loading</h4>}
            </div>
            <Switch>
                <Route path={`/courses/:id`}>
                    <Course courses={courses} />
                </Route>
            </Switch>
        </>
    );
};

export default FilterableCoursesTable;
