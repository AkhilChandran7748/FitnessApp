import React from "react";

const UserPersonalInfo = ({ client }) => {

    const user = {
        FirstName: "Basil",
        TargetWeight: 70,
        CurrentWeight: 75,
    };

    const motivationalQuotes = [
        "Push yourself because no one else is going to do it for you.",
        "You are stronger than you think. Keep going.",
        "Every workout counts. Progress over perfection.",
        "Stay dedicated. It’s not easy, but it’s worth it.",
    ];

    const dailyCommentFromTrainer = [
        "Drink more water",
        "Change 10 Push to 20 and reduce set count to 2"
    ];

    const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    const today = new Date().toLocaleDateString();
    return (
        <div className="container mt-4">
            <div className="mb-4">
                <span className="text-dark">Welcome back <p className="text-center">{user.FirstName} 💪</p></span>
            </div>

            <hr></hr>
            <div className="mb-4">
                <span className="text-dark strong">Track Your Health</span>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <div className="card text-center p-4 shadow-sm">
                        <h6 className="text-secondary">🎯 Target Weight</h6>
                        <h3 className="text-primary">{user.TargetWeight} kg</h3>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card text-center p-4 shadow-sm">
                        <h6 className="text-secondary">📊 Current Weight</h6>
                        <h3 className="text-success">{user.CurrentWeight} kg</h3>
                    </div>
                </div>
            </div>

            <hr></hr>

            {/* Motivation Card */}
            <div className="card p-4 bg-light shadow-sm">
                <h5 className="text-info">💡 Motivation for Today</h5>
                <blockquote className="blockquote mt-2 mb-0">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">Fitwith PK</footer>
                </blockquote>
            </div>


            <div className="card p-4 bg-light shadow-sm">
                <h5 className="text-danger">💡Comments</h5>
                {
                    Object.entries(dailyCommentFromTrainer).map(([index, element]) => {

                        return <blockquote className="blockquote mt-2 mb-0">
                            <p className="mb-1">{element}</p>
                            <footer className="blockquote-footer">Fitwith PK</footer>
                        </blockquote>

                    })
                }

            </div>

        </div>
    )

};

export default UserPersonalInfo;
