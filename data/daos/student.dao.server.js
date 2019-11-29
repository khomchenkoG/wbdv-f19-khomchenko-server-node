var students = []

module.exports = {
    createStudent: function (student){
        students.push(student)
    },
    findAllStudents: function () {
        return students
    },
    findStudentById: function(id) {
        let filtered = students.filter((student) => student._id == id)
        if (filtered.length>0){
            return filtered[0]
        } else return null
    },

    updateStudent: function(id, student) {
        for (let ii = 0; ii < students.length; ii++) {
            if (students[ii]._id == id){
                students[ii] = student
                return true;
            }
        }
        return false
    },

    deleteStudent: function(id) {
        let filtered = students.filter((student) => student._id != id)
        if (filtered.length < students.length){
            students = filtered;
            return true;
        } else return false;
    }
};
