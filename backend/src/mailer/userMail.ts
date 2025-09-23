import winston from 'winston'
import { Mailer } from './mailer'

export class UserMail extends Mailer {
  public async signUp({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'signUp',
        message: {
          from: '"Sign Up" <onboarding@resend.dev>',
          to: 'delivered@resend.dev',
          subject: 'Sign Up'
        }
      })
    } catch (error) {
      winston.error('email sign-up error:', error)
    }
  }

  public async resetPassword({
    email,
    accessToken
  }: {
    email: string
    accessToken: string
  }) {
    try {
      await this.mailer.send({
        template: 'resetPassword',
        message: {
          from: '"Reset Password" <onboarding@resend.dev>',
          to: email,
          subject: 'Reset Password'
        },
        locals: {
          accessToken
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async verification({
    email,
    accessToken
  }: {
    email: string
    accessToken: string
  }) {
    try {
      await this.mailer.send({
        template: 'verification',
        message: {
          from: '"Verification" <onboarding@resend.dev>',
          to: 'delivered@resend.dev',
          subject: 'Verification'
        },
        locals: {
          accessToken
        }
      })
    } catch (error) {
      winston.error('email verification error:', error)
    }
  }

  public async successfullyVerified({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyVerified',
        message: {
          from: '"Successfully verified" <onboarding@resend.dev>',
          to: email,
          subject: 'Successfully verified'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedProfile({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedProfile',
        message: {
          from: '"Successfully updated profile" <onboarding@resend.dev>',
          to: email,
          subject: 'Successfully updated profile'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedEmail({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedEmail',
        message: {
          from: '"Successfully updated email" <onboarding@resend.dev>',
          to: email,
          subject: 'Successfully updated email'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedPassword({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedPassword',
        message: {
          from: '"Successfully updated password" <onboarding@resend.dev>',
          to: email,
          subject: 'Successfully updated password'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyDeleted({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyDeleted',
        message: {
          from: '"Successfully deleted" <onboarding@resend.dev>',
          to: email,
          subject: 'Successfully deleted'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }
}
