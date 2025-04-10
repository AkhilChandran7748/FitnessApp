import React from 'react';

const UserPersonalInfo = () => {
  const user = {
    firstName: "Basil",
    targetWeight: 70,
    currentWeight: 75,
  };

  const motivationalQuotes = [
    "Push yourself because no one else is going to do it for you.",
    "You are stronger than you think. Keep going.",
    "Every workout counts. Progress over perfection.",
    "Stay dedicated. It's not easy, but it's worth it.",
  ];

  const dailyComments = [
    "Drink more water",
    "Change 10 Push to 20 and reduce set count to 2"
  ];

  const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="container mt-4">
      <div className="py-4">
        {/* Welcome Section */}
        <div className="text-center mb-4">
          <h1 className="h4 text-dark mb-2">Welcome back</h1>
          <p className="h5 text-dark d-flex align-items-center justify-content-center gap-2 mb-0">
            {user.firstName} <span className="fs-4">💪</span>
          </p>
        </div>

        {/* Weight Tracking Cards */}
        <div className="row g-3 mb-4">
          <div className="col-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-bullseye text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                <p className="text-secondary small mb-1">Target Weight</p>
                <p className="h5 text-primary mb-0">{user.targetWeight}kg</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-graph-up text-success mb-2" style={{ fontSize: '1.5rem' }}></i>
                <p className="text-secondary small mb-1">Current Weight</p>
                <p className="h5 text-success mb-0">{user.currentWeight}kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Card */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-quote text-primary"></i>
              <h2 className="h5 mb-0">Today's Motivation</h2>
            </div>
            <p className="text-secondary fst-italic mb-2">{quote}</p>
            <p className="small text-muted mb-0">- Fitwith PK</p>
          </div>
        </div>

        {/* Trainer Comments */}
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-chat-left-text text-danger"></i>
              <h2 className="h5 mb-0">Trainer Comments</h2>
            </div>
            <div className="d-flex flex-column gap-3">
              {dailyComments.map((comment, index) => (
                <div key={index} className="border-start border-3">
                  <p className="text-secondary mb-1 ml-4">{comment}</p>
                  <p className="small text-muted mb-0 ml-4">- Fitwith PK</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersonalInfo;