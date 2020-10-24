// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  let user = await fetch(
    "http://sampoder-api.herokuapp.com/v0.1/SportsEquip/Students?select=" +
      JSON.stringify({
        filterByFormula: `{Personal Email} = "${req.query.email}"`,
      })
  ).then((r) => r.json());
  console.log(user);

  if(user.length == 0){
    res.redirect(`https://airtable.com/shrFY86IAf7YDxDOD?prefill_Personal%20Email%201=${req.query.email}`)
  }

  else if(user[0].fields['Leases Count'] != '0'){
    res.redirect(`/rejected`)
  }

  else{
    res.redirect(`https://airtable.com/shrDBlz7bHUwxm8lR?prefill_Database%20Link=${req.query.email}`)
  }
};
