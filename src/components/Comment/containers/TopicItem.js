import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let TopicItem = ({ topic }) => (topic ? (
  <section>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='profile-list'>
            <div className='topic'>
              <h4>{topic.title}</h4>
              {topic.body}
              <p className='topic-author' />
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
) : null);

TopicItem.propTypes = {
  topic: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  topic: state.commentReducer.topic,
});

TopicItem = connect(
  mapStateToProps,
  null,
)(TopicItem);

const Compo = TopicItem;

export default Compo;
