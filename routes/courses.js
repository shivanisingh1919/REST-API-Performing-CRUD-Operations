const ex = require("express");
const Course = require("../models/course");
const router = ex.Router();

// Multiple get
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
});

// Single get
router.get("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const c = await Course.findById(courseId);
        res.json(c);
    } catch (err) {
        res.json(err);
    }
});

// Create
router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.json(err);
    }
});

// Delete
router.delete("/:courseId", async (req, res) => {
    try {
        await Course.deleteOne({ _id: req.params.courseId });
        res.json({
            message: "Course deleted successfully"
        });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: "Internal Server Error" }); // Respond with an error status code and message
    }
});


// Update
router.put("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        await Course.updateOne({ "_id": courseId }, req.body);
        res.json({
            message: "Course updated successfully"
        });
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
