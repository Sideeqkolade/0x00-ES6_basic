/**
 * retrieves the ids of students in the list
 */

export default function getListStudentIds(arrayOfObjects) {
  // check if the input is an array
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }

  // extract student id from each object
  return arrayOfObjects.map((student) => student.id);
}
