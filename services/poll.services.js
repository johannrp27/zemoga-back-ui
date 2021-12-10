const data = require('../data/contestants.json')
const faker = require('faker')

class PollService {

  constructor() {
    this.contestants = []
    this.initContestants()
  }

  initContestants() {
    let { contestants } = data;
    contestants = contestants.map((contestant) => {
      return {
        ...contestant,
        id: faker.datatype.uuid()
      }
    })
    this.contestants = contestants
  }

  async getContestants() {
    return this.contestants
  }

  async vote(contestantId, vote) {
    const id = this.searchById(contestantId)
    if(id >= 0) {
      let { votes } = this.contestants[id]
      if(vote === 'up') {
        votes.positive++
      } else {
        votes.negative++
      }
      this.contestants[id] = {
        ...this.contestants[id],
        votes,
      }
      return this.contestants[id]
    }
    else {
      throw new Error('Contestant id not found')
    }
  }

  searchById(id) {
    return this.contestants.findIndex((contestant) => contestant.id === id)
  }

}

module.exports = PollService