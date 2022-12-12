import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Course = ({ courses, match }) => {
    const [course, setCourse] = useState();

    const id = match.params.id;

    // Code to find the course and set the course state to display it

    return (
        <>
            <h1>Course Details</h1>
            {course && id &&
                <>
                    <h2>Course Name:</h2>
                    <p>{course.name}</p>
                    <h2>Other Details</h2>
                    <p>
                        This is a {course.category} course.  It costs £{course.price}.
                </p>
                    {course.advanced && <h6>Please note that this is an advanced course</h6>}
                </>
            }
        </>
    );
};

Course.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            advanced: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default Course;
