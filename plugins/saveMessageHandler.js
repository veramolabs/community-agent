import { AbstractMessageHandler } from '@veramo/message-handler'

export class SaveMessageHandler extends AbstractMessageHandler {
  constructor(options) {
    super()
    this.options = options
  }
  async handle(message, context) {
    if (this.options && this.options.types && this.options.types.includes(message.type)) {
      await context.agent.dataStoreSaveMessage({ message })
    } 
    return super.handle(message, context)
  }
}
