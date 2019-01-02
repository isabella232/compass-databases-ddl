import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { TextButton } from 'hadron-react-buttons';
import { hideCreateDatabase } from 'modules/create-database/is-visible';

/**
 * The more information url.
 */
// const INFO_URL_CREATE_DB =
// 'https://docs.mongodb.com/manual/faq/fundamentals/#how-do-i-create-a-database-and-a-collection';

/**
 * The help icon for capped collections url.
 */
// const HELP_URL_CAPPED = 'https://docs.mongodb.com/manual/core/capped-collections/';

/**
 * The help URL for collation.
 */
// const HELP_URL_COLLATION = 'https://docs.mongodb.com/master/reference/collation/';

/**
 * The dialog to create a database.
 */
class CreateDatabaseDialog extends PureComponent {
  static displayName = 'CreateDatabaseDialogComponent';

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    hideCreateDatabase: PropTypes.func.isRequired
  }

  /**
   * Render the modal dialog.
   *
   * @returns {React.Component} The react component.
   */
  render() {
    return (
      <Modal
        show={this.props.isVisible}
        backdrop="static"
        onHide={this.props.hideCreateDatabase}
        dialogClassName="create-collection-dialog">

        <Modal.Header>
          <Modal.Title>Create Database</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        </Modal.Body>

        <Modal.Footer>
          <TextButton
            className="btn btn-default btn-sm"
            text="Cancel"
            clickHandler={this.props.hideCreateDatabase} />
          <TextButton
            className="btn btn-primary btn-sm"
            dataTestId="create-database-button"
            text="Create Database"
            clickHandler={() => {}} />
        </Modal.Footer>
      </Modal>
    );
  }
}

/**
 * Map the store state to properties to pass to the components.
 *
 * @param {Object} state - The store state.
 *
 * @returns {Object} The mapped properties.
 */
const mapStateToProps = (state) => ({
  isVisible: state.isVisible
});

/**
 * Connect the redux store to the component.
 * (dispatch)
 */
const MappedCreateDatabaseDialog = connect(
  mapStateToProps,
  {
    hideCreateDatabase
  },
)(CreateDatabaseDialog);

export default MappedCreateDatabaseDialog;
export { CreateDatabaseDialog };
