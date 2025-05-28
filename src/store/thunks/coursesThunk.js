import {
  getCourses,
  createCourse,
  deleteCourse as removeCourseFromApi,
  updateCourse as updateCourseInApi,
} from "../../services";

import {
  setCourses,
  saveCourse,
  deleteCourse,
  updateCourse,
} from "../slices/coursesSlice";

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await getCourses();
    dispatch(setCourses(response));
  } catch (err) {
    console.error("Unable to load courses:", err);
  }
};

export const submitNewCourse = (courseData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const created = await createCourse(courseData, token);
    dispatch(saveCourse(created));
  } catch (err) {
    console.error("Unable to create course:", err);
  }
};

export const removeCourse = (courseId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await removeCourseFromApi(courseId, token);
    dispatch(deleteCourse(courseId));
  } catch (err) {
    console.error("Unable to delete course:", err);
  }
};

export const modifyCourse = (courseData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const updated = await updateCourseInApi(courseData, token);
    dispatch(updateCourse(updated));
  } catch (err) {
    console.error("Unable to update course:", err);
  }
};
