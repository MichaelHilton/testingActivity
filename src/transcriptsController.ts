import { Body, Controller, Get, Path, Post, Query, Response, Route, Tags } from "tsoa";
import { InvalidParametersError } from "./server";
import * as db from "./transcriptManager";

@Route('transcripts')
export class TranscriptsController extends Controller {

    @Get()
    public getAll() {
        return db.getAll();
    }

    /**
     * Retrieves the transcript for a given Student ID
     * @param studentID 
     * @throws InvalidParametersError if the student ID does not correspond to any known transcript 
     */
    @Get('{studentID}')
    @Response<InvalidParametersError>(400, 'Invalid values specified')
    public getTranscript(
        @Path()
        studentID: db.StudentID) {
        
    }

    /**
     * Create a new student, optionally initializing their transcript
     * @param requestBody 
     * @returns the ID of the newly created student
     */
    @Post()
    public addStudent(@Body() requestBody: {
        studentName: string,
        grades?: db.CourseGrade[]
    }) {
        //TODO make this be the handler for POST /transcripts
    }
    /**
     * Deletes a student's transcript 
     * @param studentID The ID of the student to delete
     * 
     */
    public deleteStudent(studentID: db.StudentID) {
        //TODO make this be the handler for DELETE /transcripts/:ID
    }

    /**
     * Adds a grade to a student's transcript
     * @param studentID 
     * @param courseNumber 
     * @param courseGrade 
     */
    public addGrade(studentID: db.StudentID,
        courseNumber: db.Course,
        courseGrade: number): void {
            //TODO make this be the handler for POST /transcripts/:studentID/:courseNumber
    }

    /**
     * Retrieve a student's grade in a course
     * @param studentID 
     * @param courseNumber 
     * @returns the course grade
     */
    public getGrade(
        studentID: db.StudentID,
        courseNumber: db.Course
    ) {
        //TODO make this be the handler for GET /transcripts/:studentID/:courseNumber
    }
}