import React from "react";

import LocationItem from "./LocationItem";

export default class LocationsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "selectedVenue": null
        };
    }

    onLocationItemClicked(venue) {
        this.setState({
            "selectedVenue": venue
        });
        this.props.onLocationItemClicked(venue);
    }

    render() {
        const locationItemComponents = [];
        const {
            venues
        } = this.props;
        for (let i = 0; i < venues.length; i++) {
            let venue = venues[i];
            locationItemComponents.push(
                <LocationItem
                    key={venue.id}
                    venue={venue}
                    onLocationItemClicked={this.onLocationItemClicked.bind(this)} />
            );
        }
        const style = {
            padding: "10px",
            height: "44vh",
            overflowY: "auto"
        };
        return (
            <section>
                <h4>List of Locations</h4>
                <ul style={style} tabIndex="2">
                    {locationItemComponents}
                </ul>
            </section>
        );
    }
}