import React from 'react';

import type {Action} from '../../types';
import {Avatar} from '../Avatar';
import {buttonFrom} from '../Button';
import {Card} from '../Card';
import {Stack} from '../Stack';
import {Text} from '../Text';
import {SettingAction} from '../SettingAction';

import styles from './AccountConnection.scss';

export interface AccountConnectionProps {
  /** Content to display as title */
  title?: React.ReactNode;
  /** Content to display as additional details */
  details?: React.ReactNode;
  /** Content to display as terms of service */
  termsOfService?: React.ReactNode;
  /** The name of the service */
  accountName?: string;
  /** URL for the user’s avatar image */
  avatarUrl?: string;
  /** Set if the account is connected */
  connected?: boolean;
  /** Action for account connection */
  action?: Action;
}

export function AccountConnection({
  connected = false,
  action,
  avatarUrl,
  accountName = '',
  title,
  details,
  termsOfService,
}: AccountConnectionProps) {
  const initials = accountName
    ? accountName
        .split(/\s+/)
        .map((name) => name[0])
        .join('')
    : undefined;

  const avatarMarkup = connected ? (
    <Avatar
      accessibilityLabel=""
      name={accountName}
      initials={initials}
      source={avatarUrl}
    />
  ) : null;

  let titleMarkup: React.ReactNode = null;
  if (title) {
    titleMarkup = <div>{title}</div>;
  } else if (accountName) {
    titleMarkup = <div>{accountName}</div>;
  }

  const detailsMarkup = details ? (
    <div>
      <Text variant="bodyMd" color="subdued" as="span">
        {details}
      </Text>
    </div>
  ) : null;

  const termsOfServiceMarkup = termsOfService ? (
    <div className={styles.TermsOfService}>{termsOfService}</div>
  ) : null;

  const actionElement = action
    ? buttonFrom(action, {primary: !connected})
    : null;

  return (
    <Card sectioned>
      <SettingAction action={actionElement}>
        <Stack>
          {avatarMarkup}
          <Stack.Item fill>
            <div className={styles.Content}>
              {titleMarkup}
              {detailsMarkup}
            </div>
          </Stack.Item>
        </Stack>
      </SettingAction>
      {termsOfServiceMarkup}
    </Card>
  );
}
