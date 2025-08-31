import React from "react";
import HeroCourse from "../../components/course/HeroCourse";
import CourseList from "../../components/course/CourseList";
import Container from "../../components/ui/Container";

export default function CoursePage() {
    return (
        <>
            <HeroCourse />
            <Container className="py-12">
                <CourseList />
            </Container>
        </>
    );
}
