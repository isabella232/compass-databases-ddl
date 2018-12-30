import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './toolbar.less';

/**
 * The button component name.
 */
const BUTTON = 'DeploymentAwareness.TextWriteButton';

/**
 * The toolbar component.
 */
class Toolbar extends PureComponent {
  static displayName = 'ToolbarComponent';

  static propTypes = {
    isReadonly: PropTypes.bool.isRequired,
    showCreateDatabase: PropTypes.func.isRequired
  }

  /**
   * On instantiation get the write button from deployment awareness.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
    this.TextWriteButton = global.hadronApp.appRegistry.getComponent(BUTTON);
  }

  /**
   * Render the create database button.
   *
   * @returns {Component} The button component.
   */
  renderButton() {
    if (!this.props.isReadonly) {
      return (
        <this.TextWriteButton
          className="btn btn-primary btn-xs"
          dataTestId="open-create-database-modal-button"
          text="Create Database"
          tooltipId="database-ddl-is-not-writable"
          clickHandler={this.props.showCreateDatabase} />
      );
    }
  }

  /**
   * Render Toolbar component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className={classnames(styles.toolbar)}>
        {this.renderButton()}
      </div>
    );
  }
}

export default Toolbar;
