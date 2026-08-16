const permission = [
    {
        role: "student",
        permission: [
            "canEditOwnProfile",
            "canDeleteOwnProfile",
            "canUpdateOwnProfile",
            "canSubmitAssignment"
        ]
    },
    {
        role:"mentor",
        permission:[
            "canPublishResult",
            "canEditResult",
            "canUpdateResult"
        ]
    },
    {
        role:"admin",
        permission:["all"]
    }
]

module.exports = permission