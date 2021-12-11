const data = require('../data/contestants.json')
const faker = require('faker')

class PollService {

  constructor() {
    this.candidates = []
    this.initCandidates()
  }

  initCandidates() {
    let { candidates } = data;
    candidates = candidates.map((candidates) => {
      return {
        ...candidates,
        id: faker.datatype.uuid()
      }
    })
    this.candidates = candidates
  }

  async getCandidates() {
    return this.candidates
  }

  async vote(candidateId, vote) {
    const id = this.searchById(candidateId)
    if(id >= 0) {
      let { votes } = this.candidates[id]
      if(vote === 'up') {
        votes.positive++
      } else {
        votes.negative++
      }
      this.candidates[id] = {
        ...this.candidates[id],
        votes,
      }
      return this.candidates[id]
    }
    else {
      throw new Error('Candidate id not found')
    }
  }

  searchById(id) {
    return this.candidates.findIndex((candidate) => candidate.id === id)
  }

}

module.exports = PollService