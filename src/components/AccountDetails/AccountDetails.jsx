import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Metagascar Metaverse</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
            The Metaverse is open, and the rocketships of explorers have been dispatched! The first MetaIsland to be discovered by the Alpha Explorer "Meta" has been dubbed Metagascar. Here you will find a thriving community of unique MetaHumans who reside in their equally unique MetaHomes. On the island of Metagascar you will find various facet's of social activity including friendship, dating, and of course what island would be complete without messages in a bottle!


            </p>
            <p className="lead">
              Welcome to Metagasacar Metaverse            
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
